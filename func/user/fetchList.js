/**
 * Created by bangbang93 on 15/10/27.
 */
'use strict';
const request = require('../../libs/request');
const URL = require('../../libs/url');
const async = require('async');
const Q = require('q');
const MongoClient = require('mongodb').MongoClient;

module.exports = function (opts)  {
  let host = opts.host || 'localhost';
  let db = opts.db || 'cppStolen';
  let start = opts.start || 1;
  let end = opts.end || 10;
  let parallel = opts.parallel || 1;

  let queue = async.queue(function (task, cb) {
    request(URL.MeUser_Url, {
      userid: task.userid
    }).then(function (user) {
      cb(null, user);
    }).catch(cb);
  }, parallel);

  Q.ninvoke(MongoClient, 'connect', `mongodb://${host}/${db}`).then(function (db) {
    return db.collection('users');
  }).then(function (collection) {
    let done = 0;
    let count = end - start + 1;
    for(let i = start;i<= end;i++){
      Q.ninvoke(queue, 'push', {
        userid: i
      }).then(function (user) {
        collection.insert(user);
        done++;
        console.log(`${done}/${count}`);
      }).catch(function (err) {
        done++;
        console.log(`${done}/${count} --`);
        if (err != 'no such data') {
          console.error(err);
        }
      })
    }
    queue.drain = function (){
      process.exit();
    }
  });
};

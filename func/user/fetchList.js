/**
 * Created by 伟航 on 15/10/27.
 */
'use strict';
const request = require('../../libs/request');
const URL = require('../../libs/url');
const async = require('async');
const Q = require('q');
const MongoClient = require('mongodb').MongoClient;

module.exports = function (opts)  {
  let host = opts.host || '192.168.100.1';
  let db = opts.db || 'cppStolen';
  let start = opts.start || 1;
  let end = opts.end || 10;
  let queue = async.queue(function (task, cb) {
    request(URL.MeUser_Url, {
      userid: task.userid
    }).then(function (user) {
      cb(null, user);
    }).catch(cb);
  }, 1);

  Q.ninvoke(MongoClient, 'connect', `mongodb://${host}/${db}`).then(function (db) {
    return db.collection('users');
  }).then(function (collection) {
    let done = 0;
    let count = end - start + 1;
    for(let i = start;i<= end;i++){
      queue.push({
        userid: i
      }, function (err, user) {
        collection.insert(user);
        done++;
        console.log(`${done}/${count}`);
      })
    }
    queue.drain = function (){
      process.exit();
    }
  });
};

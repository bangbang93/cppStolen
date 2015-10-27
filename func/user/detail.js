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
  let userid = opts['userid'];
  request(URL.MeUser_Url, {
    userid: userid
  }).then(function (user) {
    console.log(user);
  });
};


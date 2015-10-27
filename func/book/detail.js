/**
 * Created by bangbang93 on 15/10/27.
 */
'use strict';
const request = require('../../libs/request');
const URL = require('../../libs/url');
const async = require('async');
const Q = require('q');

module.exports = function (opts) {
  let doujinshiid = opts['doujinshiid'];
  request(URL.BooksDetail_Url, {
    doujinshiid: doujinshiid,
    userid: 1
  }).then(function (user) {
    console.log(user);
  });
};

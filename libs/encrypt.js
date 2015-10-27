/**
 * Created by bangbang93 on 15/10/27.
 */
'use strict';
const crypto = require('crypto');

exports.sha1 = function (str) {
  return crypto.createHash('sha1').update(str).digest().toString('hex');
};

exports.getCode = function (userid) {
  return exports.sha1(`cc|${userid}comicup|benzi`).toUpperCase();
};

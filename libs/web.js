/**
 * Created by bangbang93 on 15/10/29.
 */
'use strict';
const request = require('request');

module.exports = function (userid, url) {
  return new Promise(function (resolve, reject) {
    request.get(url, {
      headers: {
        cookie: `user=${userid}|11111|11111|2|7DA9BDF67B0B27D51FB8CE764C7FF7AE55DACC29`
      }
    }, function (err, response, body) {
      if (err) return reject(err);
      return resolve(body);
    })
  })
};

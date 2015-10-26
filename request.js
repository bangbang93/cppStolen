/**
 * Created by 伟航 on 15/10/27.
 */
'use strict';
const request = require('request');
const URL = require('./libs/url');

exports.getUserDetail = function (userid) {
  return new Promise(function (resolve, reject) {
    request.get(`${URL.Host_Url}${URL.MeUser_Url}?userid=${userid}`, function (err, res, body) {
      if (err) return reject(err);
      body = JSON.parse(body);
      if (body.result == 0){
        resolve(body['resultContent']);
      } else {
        reject('no such user');
      }
    })
  })
};

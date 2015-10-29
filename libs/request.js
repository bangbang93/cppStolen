/**
 * Created by bangbang93 on 15/10/27.
 */
'use strict';
const request = require('request');
const URL = require('../libs/url');

module.exports = function (url, paramsObject) {
  if (!url.match(/^http/)) {
    url = URL.Host_Url + url;
  }
  let params = [];
  Object.keys(paramsObject).forEach(function (key) {
    params.push(encodeURIComponent(key) + '=' + encodeURIComponent(paramsObject[key]));
  });
  url = url + '?' + params.join('&');
  if (paramsObject.userid){
    var cookie = `user=${paramsObject.userid}|1|1|2|7DA9BDF67B0B27D51FB8CE764C7FF7AE55DACC29`;
  } else {
    cookie = 'user=1|1|1|2|7DA9BDF67B0B27D51FB8CE764C7FF7AE55DACC29';
  }
  return new Promise(function (resolve, reject) {
    request.get(url, {
      headers: {
        Cookie: cookie
      }
    }, function (err, res, body) {
      if (err) return reject(err);
      try {
        let json = JSON.parse(body);
        if (json.result == 0) {
          resolve(json['resultContent']);
        } else {
          console.log(body);
          reject('no such data');
        }
      }
      catch (e) {
        if (e instanceof SyntaxError) {
          console.log(body);
          console.log(url);
          reject('error json');
        } else {
          reject(e);
        }
      }
    })
  })
};

/**
 * Created by 伟航 on 15/10/27.
 */
'use strict';
const request = require('request');
const URL = require('../libs/url');

module.exports = function (url, paramsObject) {
  if (!url.match(/^http/)){
    url = URL.Host_Url + url;
  }
  let params = [];
  Object.keys(paramsObject).forEach(function (key) {
    params.push(encodeURIComponent(key) + '=' + encodeURIComponent(paramsObject[key]));
  });
  url = url + '?' + params.join('&');
  return new Promise(function (resolve, reject) {
    request.get(url, function (err, res, body) {
      if (err) return reject(err);
      try{
        let json = JSON.parse(body);
        if (json.result == 0){
          resolve(json['resultContent']);
        } else {
          reject('no such data');
        }
      }
      catch(e){
        if (e instanceof SyntaxError){
          reject('error json');
        } else {
          reject(e);
        }
      }
    })
  })
};

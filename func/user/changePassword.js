/**
 * Created by bangbang93 on 15/10/27.
 */
'use strict';
const request = require('../../libs/request');
const URL = require('../../libs/url');
const Q = require('q');

module.exports = function (opts) {
  let mobile = opts['mobile'];
  let userid = opts.userid;
  let newpassword = opts['password'];
  if (!mobile && !userid){
    return 'need mobile or userid';
  }
  let user;
  if (userid){
    user = request(URL.MeUser_Url, {
      userid
    }).then(function (result) {
      let tel =  result['tel'] + '';
      if (tel.length != 11){
        throw new Error('this user has no mobile phone');
      }
    })
  } else {
    user = Promise.resolve(mobile);
  }
  user.then(function (mobile) {
    return request(URL.Code_Url, {
      mobile
    })
  }).then(function (result) {
    let code = result.code;
    let mobile = result.mobile;
    return request(URL.ChangePass_Url, {
      mobile,
      newpassword,
      code
    })
  }).then(function (result) {
    console.log(result);
  })
};

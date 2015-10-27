/**
 * Created by bangbang93 on 15/10/27.
 */
'use strict';
const request = require('../../libs/request');
const URL = require('../../libs/url');
const Q = require('q');
const encrypt = require('../../libs/encrypt');

module.exports = function (opts)  {
  let userid = opts.userid;
  if (!userid){
    return 'need userid';
  }
  request(URL.MeUser_Url, {
    userid
  }).then(function (user) {
    let nickname = opts['nickname'] || user['nickname'];
    let sex = (opts['sex'] || user['sex']) == '女'?0:1;
    let facepicid = '0';
    let code = encrypt.getCode(userid);
    let backgroundpicid = opts['backgroundPicId'] || user['backgroundPicId'];
    return request(URL.ChangeData_Url, {
      userid,
      nickname,
      sex,
      facepicid,
      code,
      backgroundpicid
    })
  }).then(function () {
    return request(URL.MeUser_Url, {
      userid
    });
  }).then(function (user) {
    console.log(user);
  })
};

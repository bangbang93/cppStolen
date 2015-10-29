/**
 * Created by bangbang93 on 15/10/29.
 */
'use strict';
const web = require('../../libs/web');
const cheerio = require('cheerio');

module.exports = function (opts) {
  let userid = opts.userid;
  if (!userid){
    return 'need userid';
  }

  web(userid, 'http://www.comicup.cn/benzi/ajax/NCCUser/getUserInfo.ashx').then(function (body) {
    console.log(body);
  })
};

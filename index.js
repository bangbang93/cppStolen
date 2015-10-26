/**
 * Created by 伟航 on 15/10/27.
 */
'use strict';
const meow = require('meow');
const fs = require('fs');
const path = require('path');

const cli = meow(`
  Usage
  $ node index <func>

  Func
  user/fetchList --host localhost --db cppStolen --start 0 --end 10
`);

let func = cli.input[0];

if (fs.existsSync(path.join(__dirname, 'func', func) + '.js')){
  require(path.join(__dirname, 'func', func))(cli.flags);
} else {
  cli.showHelp();
}

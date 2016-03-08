var chalk = require('chalk'),
    tiappxml = require('tiapp.xml'),
    guidgen = require('guid');

var GUID_RESET = '11111111-1111-1111-1111-111111111111';

module.exports = function(_params){
  var params = _params || {};
  var command = params.command;

  var tiapp = null;

  try {
    tiapp = tiappxml.load('tiapp.xml');
  } catch (err) {
    console.error(chalk.red('[ERROR]') + ' tiapp.xml not found.');
    return;
  }

  switch (command) {
  case 'show':
    console.log(tiapp.guid);
    return;
  case 'reset':
    tiapp.guid = GUID_RESET;
    console.log('Set guid: ' + GUID_RESET);
    break;
  case 'set':
    var guid = params.arg;
    if (undefined === guid) {
      console.error(chalk.yellow('[WARNING]') + ' `guiid set` command must have arguments.');
      return;
    }
    tiapp.guid = guid;
    console.log('Set guid: ' + guid);
    break;
  case 'new':
    var newguid = guidgen.raw();
    tiapp.guid = newguid;
    console.log('Generate guid: ' + newguid);
    break;
  default:
    console.error(chalk.yellow('[WARNING]') + ' Unkown command \"' + command + '\"');
    return;
  }

  if (params.program.debug) {
    console.log(tiapp.doc.toString());
  } else {
    tiapp.write();
  }
};

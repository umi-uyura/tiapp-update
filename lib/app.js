var chalk = require('chalk'),
    tiappxml = require('tiapp.xml');

module.exports = function(_params){
  var params = _params || {};
  var command = params.command;
  var arg = params.arg;

  var tiapp = null;

  try {
    tiapp = tiappxml.load('tiapp.xml');
  } catch (err) {
    console.error(chalk.red('[ERROR]') + ' tiapp.xml not found.');
    return;
  }

  switch (command) {
  case 'init':
    tiapp.analytics = false;
    break;
  case 'version':
    if (!arg) {
      console.log(tiapp.version);
      return;
    }

    changeAppVersion(tiapp, arg);
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

function changeAppVersion(tiapp, version) {
  tiapp.version = version;
}

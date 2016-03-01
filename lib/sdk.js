var chalk = require('chalk'),
    tiappxml = require('tiapp.xml');

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

  if (!params.version) {
    console.log(tiapp.sdkVersion);
    return;
  }

  tiapp.sdkVersion = params.version;

  if (params.program.debug) {
    console.log(tiapp.doc.toString());
  } else {
    tiapp.write();
  }
};

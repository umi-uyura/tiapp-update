var chalk = require('chalk'),
    tiappxml = require('tiapp.xml'),
    path = require('path');

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

  if (!command || command === 'show') {
    console.log(tiapp.sdkVersion);
    return;
  }

  var sdkVer = command;

  if (command === 'system') {
    var homeDir = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
    var configPath = path.join(homeDir, '.titanium/config.json');
    var configJson = require(configPath);
    sdkVer = configJson.sdk.selected;
  }

  tiapp.sdkVersion = sdkVer;
  console.log('Set sdk version: ' + sdkVer);

  if (params.program.debug) {
    console.log(tiapp.doc.toString());
  } else {
    tiapp.write();
  }
};

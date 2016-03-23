var chalk = require('chalk'),
    tiappxml = require('tiapp.xml');

var APPC_PROPS = [
  'appc-app-id',
  'acs-authbase-url-development',
  'acs-base-url-development',
  'acs-oauth-secret-development',
  'acs-oauth-key-development',
  'acs-api-key-development',
  'acs-username-development',
  'acs-password-development',
  'acs-authbase-url-production',
  'acs-base-url-production',
  'acs-oauth-secret-production',
  'acs-oauth-key-production',
  'acs-api-key-production',
  'acs-username-production',
  'acs-password-production',
  'appc-org-id',
  'appc-creator-user-id'
];

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
  case 'remove':
    APPC_PROPS.forEach(function(elem, index) {
      var prop = tiapp.getProperty(elem);
      if (prop) {
        tiapp.removeProperty(elem);
        console.log('Remove property \'' + elem + '\', value = ' + prop);
      }
    });
    console.log('Remove configuration related to appc.');
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

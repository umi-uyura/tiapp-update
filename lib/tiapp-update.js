var program = require('commander');

program.version(require('../package.json').version)
  .usage('<command> <parameter>')
  .option('-D, --debug', 'Debug mode, Do not write to tiapp.xml');

program.command('guid <command> [guid]')
  .description('Change guid value')
  .on('--help', function() {
    console.log('  Commands:');
    console.log('');
    console.log('    show     Display guid');
    console.log('    reset    Reset guid to 11111111-...');
    console.log('    set      Set guid to [guid]');
    console.log('');
  })
  .action(function(command, arg) {
    require('../lib/guid')({
      command: command,
      program: program,
      arg: arg
    });
  });

program.command('sdk [version]')
  .description('Change sdk version')
  .action(function(version) {
    require('../lib/sdk')({
      version: version,
      program: program
    });
  });

program.command('app <command> [arg]')
  .description('Change application configuration')
  .action(function(command, arg) {
    require('../lib/app')({
      command: command,
      arg: arg,
      program: program
    });
  });

program.parse(process.argv);

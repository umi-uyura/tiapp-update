var program = require('commander');

program.version(require('../package.json').version)
  .usage('<command> <parameter>')
  .option('-D, --debug', 'Debug mode, Do not write to tiapp.xml');

program.command('guid <command> [arg]')
  .description('Change guid value')
  .on('--help', function() {
    console.log('  Commands:');
    console.log('');
    console.log('    show        Display guid');
    console.log('    reset       Reset guid to 11111111-...');
    console.log('    set [guid]  Set guid to [guid]');
    console.log('');
  })
  .action(function(command, arg) {
    require('../lib/guid')({
      command: command,
      program: program,
      arg: arg
    });
  });

program.command('sdk <command>')
  .description('Change sdk version')
  .on('--help', function() {
    console.log('  Commands:');
    console.log('');
    console.log('    show            Show sdk version');
    console.log('    <sdk version>   Set sdk version');
    console.log('    system          Set sdk version to selected version in the system');
    console.log('');
  })
  .action(function(command) {
    require('../lib/sdk')({
      command: command,
      program: program
    });
  });

program.command('app <command> [arg]')
  .description('Change application configuration')
  .on('--help', function() {
    console.log('  Commands:');
    console.log('');
    console.log('    version                Show app version');
    console.log('    version <app version>  Set app version');
    console.log('    init                   Set the recommended settings of tiapp.xml');
    console.log('');
  })
  .action(function(command, arg) {
    require('../lib/app')({
      command: command,
      arg: arg,
      program: program
    });
  });

program.parse(process.argv);

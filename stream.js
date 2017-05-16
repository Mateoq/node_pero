const spawn = require('child_process').spawn;
const { Observable } = require('rxjs');

const fromChildProcess = (command, args) => (
  Observable.create((observer) => {
    const ls = spawn(command, args);

    ls.stdout.on('data', (data) => {
      observer.next(data);
    });

    ls.stderr.on('data', (data) => {
      observer.error(data);
    });

    ls.on('close', (code) => {
      observer.next(`child process exited with code ${code}`);
      observer.complete();
    }); 
  })
);

module.exports = fromChildProcess;

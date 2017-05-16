const fromChildProcess = require('./stream');

// First Approach.
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });



// Observable Approach 1.
// ========================
// fromChildProcess('ls', ['-lh', '/usr'])
//   .subscribe(
//     (data) => { console.log(data.toString()) },
//     (err) => { console.log(err) }
//   );

// Observable Approach 2.
// ========================
fromChildProcess('node', ['test-logs.js'])
  .subscribe(
    (data) => { console.log(data.toString()) },
    (err) => { console.log(err.toString()) }
  );

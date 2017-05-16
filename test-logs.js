const { Observable } = require('rxjs');

Observable.interval(500)
  .take(10)
  .subscribe((num) => {
    console.log(num);
  });

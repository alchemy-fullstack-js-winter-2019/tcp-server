const { createWriteStream } = require('fs');

const stream = createWriteStream('./writing.txt');

stream.write('wrote something', err => 
/* eslint-disable-next-line */
  console.log(err));

stream.on('err', err => {
  /* eslint-disable-next-line */
  console.log(err);
});

// stream.on('wrote something', () => {
//   /* eslint-disable-next-line */
//   console.log('DONE');
// });

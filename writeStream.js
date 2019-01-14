const { createWriteStream } = require('fs');

const stream = createWriteStream('./writing.txt');

stream.write('wrote something', err => 
  console.log(err));

// stream.on('err', err => {
//   console.log(err);
// });

// stream.on('wrote something', () => {
//   console.log('DONE');
// });

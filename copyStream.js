const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });

const writeStream = createWriteStream('./LAB-copy.txt');

stream.on('data', data => {
  /* eslint-disable-next-line */
  writeStream.write(data, err => console.log(err));
});

stream.on('end', stream.end);
/* eslint-disable-next-line */
stream.on('error', err => console.log(err));
/* eslint-disable-next-line */
stream.on('end', () => console.log('Done'));




const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });

const writeStream = createWriteStream('./LAB-copy.txt');

stream.on('data', data => {
  writeStream.write(data, err => console.log(err));
});

stream.on('end', stream.end);

stream.on('error', err => console.log(err));

stream.on('end', () => console.log('Done'));




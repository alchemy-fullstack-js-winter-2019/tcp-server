const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.md', { encoding: 'utf8' });

const copy = readStream.on('data', data => {
  writeStream.write(data, err => console.log(err));
});

copy.on('error', err => console.log(err));
copy.on('end', () => console.log('done!'));


// Read File Stream & Write File Stream
const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });

stream.on('data', data => console.log(data));
stream.on('error', err => console.log(err));
stream.on('end', () => console.log('DONE!!!!!'));

const writeStream = createWriteStream('./test.text');

writeStream.write('hello!!!'), err => console.log(err);

// Copy with Chunks
// const { createReadStream, createWriteStream } = require('fs');

// const stream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.md');

stream.on('data', data => {
  writeStream.write (data, err => console.log(err));
});

stream.on('error', err  => console.log(err));
stream.on('end', ()  => console.log('DONE!!!!!'));

// Pipe Streams

const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.md');

stream.pipe(writeStream);
stream.pipe(process.stdout);



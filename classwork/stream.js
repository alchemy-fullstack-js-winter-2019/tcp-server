const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('../LAB.md', { encoding: 'utf8' });

stream.on('data', data => console.log(data));
stream.on('error', error => console.log(error));
stream.on('end', () => console.log('DONE!!!'));

const writeStream = createWriteStream('./test.txt');

writeStream.write('hello!', err => console.log(err));

const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.md');

readStream.pipe(writeStream);
readStream.pipe(process.stdout);
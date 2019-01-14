const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });

const writeStream = createWriteStream('./LAB-copy.txt');

stream.pipe(writeStream); 

stream.pipe(process.stdout);

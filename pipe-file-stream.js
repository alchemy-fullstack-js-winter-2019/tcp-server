const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy2.md', { encoding: 'utf8' });

readStream.pipe(writeStream); // copies LAB.md to LAB-copy2.md
readStream.pipe(process.stdout); // outputs LAB.md to console

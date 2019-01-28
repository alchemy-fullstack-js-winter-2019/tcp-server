const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./classwork/LAB-copy.txt');

// stream.on('data', data => {
//   writeStream.write(data, err => console.error(err));
// });
// stream.on('error', error => console.log(error));
// stream.on('end', () => console.log('DONE!!!'));

stream.pipe(writeStream);
stream.pipe(process.stdout);

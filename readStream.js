const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.txt');

stream.pipe(writeStream);
stream.pipe(process.stdout);
stream.pipe(process.stdin);



// stream.on('data', data => {
//   writeStream.write(data, err => console.error(err));
// });

// stream.on('error', err => console.log(err));
// stream.on('end', () => console.log('DONE!!!'));


const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.txt');

stream.pipe(writeStream);
stream.pipe(process.stdout);

console.log(process.stdout);

//we'll be using on events in the lab more than pipes:

// stream.on('data', data => {
//   //write to my writeStream
//   writeStream.write(data, err => console.log(err));
// });
// stream.on('error', err => console.error(err));
// stream.on('end', () => console.log('DONE!!!!!'));

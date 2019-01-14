const fs = require('fs');
const { createReadStream, createWriteStream } = require('fs');



const stream = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./LAB-copy.md');

stream.pipe(writeStream);

stream.on('data', data => {
  writeStream.write('data', err => console.log(err));
});

writeStream.on('pipe', (src) => {
  console.log('Something is piping into the water');
  
});

stream.pipe(writeStream);

stream.on('error', err => console.error(err));
stream.on('end', () => console.log('DONE!'));










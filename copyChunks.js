const { createReadStream} = require('fs'); 

const stream = createReadStream('./LAB.md,' { encoding: 'utf8'});
const writeStream = createWriteStream('./LAB-copy.txt');

stream.on('data', data => { //every chunk of data I write it to my write stream
  //write to my writeStream
  writeStream.write(data, err => console.error(err));
});

stream.on('error', err => console.err)
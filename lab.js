

const { createReadStream, createWriteStream } = require('fs'); 

const stream = createReadStream('./LAB.md', { encoding: 'utf8' }); //create a new stream the lab format

stream.on('data', data => console.log(data)); //listening events
stream.on('error', err => console.error(err));
stream.on('end', () => console.log('DONE!!!!'));

const writeStream = createWriteStream('./test.txt');

writeStream.write('hello', err console.log(err)); //this can also take a callback


//Pipe stream

const stream = createReadStream('./LAB.md', { encoding: 'utf8 ' });
const writeStream = createWriteStream('./LAB-copy.md');

stream.pipe(writeStream); //this stream into write stream
stream.pipe(process.stdout); //writes to terminal - process.standardout-operating system

//if you want to listen to the erros you want to do a stream.on('error')



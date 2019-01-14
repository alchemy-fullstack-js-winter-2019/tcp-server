/**/
const { 
  createReadStream,
  createWriteStream
} = require('fs'); // Destructure with {}
const createServer = require('net');

// Create a new stream and encode to string
const readStream = createReadStream('./LAB.md', { encoding: 'utf8' });

// Data event logs data - use on keyword for events
readStream.on('data', data => console.log(data));

// Error event logs error
readStream.on('error', err => console.log(err));

// End event says 'done!'
readStream.on('end', () => console.log('done!'));

// Create a new write stream and specify the file to write to
const writeStream = createWriteStream('./LAB-copy.md', { encoding: 'utf8' });

// use write keyword - 
writeStream.write('hello!', err => console.log(err));

readStream.on('data', data => {
  writeStream.write(data, err => {
    console.error(err);
  })
});

const server = createServer(client => {
  console.log('Client Connected');
)};

server.listen(7890, () => console.log('listening on 7890'));

// readStream.pipe(writeStream);
// standard out process(keyword for going to the operating system) prints to terminal
// readStream.pipe(process.stdout);

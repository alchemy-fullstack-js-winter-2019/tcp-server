const { createReadStream, createWriteStream }  = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8'});

// stream.on('data', data => console.log(data));
// stream.on('error', err => console.log(err));
// stream.on('end', () => console.log('DONE'));

// const writeStream = createWriteStream('./newWrite.txt', {encoding: 'utf8'});
// writeStream.write(data, err => console.log(err));

const writeCopy = createWriteStream('./LAB-copy.md');
stream.on('data', data => {
    writeCopy.write(data, err => console.log(err));
});

stream.pipe(writeCopy);

stream.pipe(process.stdout);
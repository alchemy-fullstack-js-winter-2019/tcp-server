const { createReadStream } = require('fs');


const stream = createReadStream('./LAB.md', { encoding: 'utf8' });

stream.on('data', data => console.log(data));
stream.on('error', err => console.error(err));
stream.on('end', () => console.log('DONE!'));

// const fs = require('fs');
const { createReadStream } = require('fs');

const stream = createReadStream('./LAB.md', { encoding: 'utf8' });

stream.on('data', data => console.log(data));
stream.on('error', err => console.log(err));
stream.on('end', () => console.log('done!'));

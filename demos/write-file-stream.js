const { createWriteStream } = require('fs');

const stream = createWriteStream('./LAB-copy.md', { encoding: 'utf8' });

stream.write('HELLOOOOOOOO', err => console.log(err));

const { createReadStream } = require('fs'); // deconstructed fs 

const stream = createReadStream('./LAB.md', { encoding: 'utf8' }); //gave it a pathname and encoded it 

// passed in the data 
stream.on('data', data => {
  /* eslint-disable-next-line */
  console.log(data);
});

// gave an event listener for an error
/* eslint-disable-next-line */
stream.on('error', err => console.log(err));

// event listener for end
stream.on('end', () => {
/* eslint-disable-next-line */
  console.log('Done!!!');
});


const { createReadStream } = require('fs'); // deconstructed fs 

const stream = createReadStream('./LAB.md', { encoding: 'utf8' }); //gave it a pathname and encoded it 

// passed in the data 
stream.on('data', data => {
  console.log(data);
});

// gave an event listener for an error
stream.on('error', err => console.log(err));

// event listener for end
stream.on('end', () => {
  console.log('Done!!!');
});


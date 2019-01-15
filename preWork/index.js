// const { createReadStream } = require('fs');
// const { createWriteStream } = require('fs');


// const stream = createReadStream('./LAB.md', { encoding: 'utf-8' });

// stream.apply('data', data => console.log(data));
// stream.on('error', err => console.log(err));
// stream.on('end', () => console.log('Donzo!!!'));

// // const writeStream =  createWriteStream('./sampleWriteStream.txt');

// // writeStream.write('writing through the write stream fs', err => console.log(err));


// //create a function that copys and writes a stream
// function copyStream(){
//   //create a read stream
//   //create a write stream
//   const stream = createdReadStream('./Lab.md', { encoding: 'utf-8' });
//   const writeStream = createWriteStream('./LAB-copy.text');
//   writeStream.write('data', err => console.errero(err));
//   stream.on('error', err => console.err(err));
//   stream.on('end', ()=> conseol.log('done with copy!'));
  
// }

// copyStream();


// //pipe stream aka bring togetther
// stream.pipe(writeStream);

// //prints to console.
// stream.pipe(process.stdout);

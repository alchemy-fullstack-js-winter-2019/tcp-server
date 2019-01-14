const { 
    createReadStream, 
    createWriteStream
} = require('fs');



const stream  = createReadStream('./LAB.md', { encoding: 'utf8' });
const writeStream = createWriteStream('./labCopy.txt', { encoding: 'utf8' });

// stream.on('data', data => {
//     console.log(data);
//     writeStream.write(data, err => {
//         if(err) {
//             console.error(err);
//         }
//     });
// });

// stream.on('error', err => console.log(err));
// stream.on('end', () => console.log('done'));

// writeStream.write('data', err => {
//     console.error(err);
// });


stream.pipe(writeStream);

stream.pipe(process.stdout);







const fs = require('fs');

var writeStream = fs.createWriteStream('writestream.txt');

writeStream.write('Hello');



// const writeStream = createWriteStream('./test.txt');

// writeStream.write('hello', err console.log(err); => ) //this can also take a callback

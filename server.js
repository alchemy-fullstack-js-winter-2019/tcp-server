// const http = require('http');

const app = require('./lib/app');
const PORT = 7890;

/* eslint-disable-next-line */
app.on('listening', () => console.log('Server listening on 7890'), PORT);

app.listen(PORT);

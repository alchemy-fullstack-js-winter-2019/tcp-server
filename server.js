// const http = require('http');

const app = require('./app');
const PORT = 7890;

app.listen(() => console.log('Server listening on 7890'), PORT);

app.listen(PORT);
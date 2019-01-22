const server = require('./lib/app');

const PORT = 7890;

server.listen(PORT, () => console.log('LISTENING ON 7890'));

const server = require('./lib/app');

server.on('error', (err) => {
  throw err;
});

server.listen(7890, () => {
  console.log('server listening on 7890');
});


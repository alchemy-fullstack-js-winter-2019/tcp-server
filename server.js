const server = require('./lib/app');

server.listen(6789, () => {
  console.log('server listening on 6789');
});
const server = require('./lib/app');

const PORT = 4562;

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});



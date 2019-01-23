const server = require('./lib/app');

const PORT = 3333;

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server started on ${PORT}`);
});

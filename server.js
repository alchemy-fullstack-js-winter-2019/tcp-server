const server = require('./lib/app');

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

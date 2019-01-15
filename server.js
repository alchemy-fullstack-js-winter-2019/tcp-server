/* eslint-disable no-console */
const { createServer } = require('./lib/app');

const PORT = 7890;

createServer.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

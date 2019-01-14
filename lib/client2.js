const { createConnection } = require('net');

const client2 = createConnection(7890, () => {
  client2.write('sup');
  client2.on('data', data => {
    console.log(data.toString());
  });
});

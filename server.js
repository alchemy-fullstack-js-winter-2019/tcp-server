const { createServer } = require('net');

let random = Math.floor(Math.random() * 3);
const nameArray = ['pete', 'pete2', 'pete3'];
let clientName = nameArray[random];

const server = createServer(client => {
  console.log('Client Connected');
  client.on('data', data => {
    console.log(`${clientName}: ${data}`);
    client.write(`ECHO: ${clientName} ${data}`);
  });
});


server.listen(7890, () => console.log('LISTENING ON 7890'));

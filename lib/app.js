const {  createServer  } = require('net');
const Chatroom = require('./chatroom');
const parseMessage = require('./parseMessage');
const clients = new Chatroom();


const server = createServer(7890, client => {
  console.log('Client Connected');
  clients.add(client);  
  
  client.on('data', data => {
    console.log(`Client: ${data}`);
    //parseMessage
    const {
      command,
      arg,
      text
    } = parseMessage(data);
    client.setEncoding('utf8');
    //setup if/else for parse messaging namchange, dm, & @all
    if(command === 'all') {
      clients
        .getBroadcastClients(client)
        .forEach(c => c.write(text));
    
    } else if(command === 'dm') {
      const client = clients.getClient(arg);
      console.log(client.username);
      client.write(`Your username ${client.username}`);
    }
    else if(command === '@nick') {
      clients.rename(client.username, client.arg);
      client.write(`You are now known as: ${client.username, arg}`);
    }
  });
  client.on('end', () => {
    console.log('client disconnected');
  });
});



module.exports = server;

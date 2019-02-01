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
    else if(command === 'Doobly') {
      clients.rename(client.username, client.arg);
      client.write(`You are now known as: ${client.username, arg}`);
    }
  });
  
  
  //if/elseif/else or switch on the parseMessage command
  //dm look up client based on username (found in arg key)
  //-> send that client the message(found in the text key)
  //all use chatRoom.all the message (found in the text key) filter out the client sending data
  //->send each client the message (found in text key) filter out the client sending data
  //nick -> chatRoom.rename with newName (found in arg key)
  //     chatRoom.all().forEach(); =>
  //       client.write(data))
  //   });
    
  //   //when a client disconnets remove from chatRoom
  // });
  client.on('end', () => {
    console.log('client disconnected');
  });
});



module.exports = server;

const {  createServer  } = require('net');
const Chatroom = require('./chatroom');
const parseMessage = require('./parseMessage');
const chatroom = new chatroom();


const server = createServer(7890, client => {
  console.log('Client Connected');
  chatroom.add(client);  
  
  client.on('data', data => {
    console.log(`Client: ${data}`);
    //parseMessage
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
    const {
      command,
      arg,
      text
    } = parseMessage(data);
  });
  client.on('end', () => {
    console.log('client disconnected');
  });
});


module.exports = server;

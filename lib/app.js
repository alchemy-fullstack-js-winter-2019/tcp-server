const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

const server = createServer(client => {

  client.setEncoding('utf8');
  chatRoom.add(client);

  client.on('data', data => {
    // parseMessage
    const message = parseMessage(data);
    // if/elseif/else or switch on parseMessage command
    // all use chatRoom.all to get a list of all clients
    // -> send each client the message (found in text key) filter out the client sending data
    if(message.command === 'all') {
      chatRoom
        .getBroadcast(client)
        .forEach(c => c.write(`${client.username}: ${message.text}`));
    }
    // dm look up client based on username (found in arg key)
    // -> send that client the message (found in text key)
    else if(message.command === 'dm') {
      chatRoom
        .getClient(message.arg)
        .write(`${client.username}: ${message.text}`);
    }
    // nick -> chatRoom.rename with the newName (found in arg key)
    else if(message.command === 'nick') {
      chatRoom.rename(client.username, message.arg);
    }
  });

  // when a client disconnects remove them from chatRoom
  client.on('end', () => {
    chatRoom.remove(client);
  });

}

module.exports = server;



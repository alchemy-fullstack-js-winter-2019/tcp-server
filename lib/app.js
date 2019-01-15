const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const server = createServer(client => {
  const chatroom = new ChatRoom();
  client.setEncoding('utf8');

  server.on('error', err => {
    console.log(err);
    client.destroy();
  });


  client.on('data', data => {
    console.log(`${client.username} connected`);
    // add client to chatroom
    chatroom.add(client);
    // parseMessage
    const message = parseMessage(data);
    // if/elseif/else or switch on the parseMessage command
    if(message.command === '@all') {
      chatroom.all(client).forEach(cli => cli.write(message.text));
    } else if(message.command === '@nick') {
      chatroom.rename(client, message.arg);
    } else if(message.command === '@dm') {
      chatroom.getClient(message.arg).write(message.text);
    }
    // dm look up client based on username (found in arg key)
    // * send that client a message
    // all use chatroom.all to get list of all clients
    // * send each client a message (found in text key)
    // * filter out the client sending data
    // nick > chatroom.rename with new name (found in arg key)
  });
  // when client disconnects remove them from chatroom
  client.on('end', () => {
    console.log(`${client.username} disconnected`);
    chatroom.remove(client);
  });

});

module.exports = server;

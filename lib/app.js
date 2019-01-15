const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

const server = createServer(client => {
  chatRoom.add(client);
  client.on('data', data => {
    const userObj = parseMessage(data);
    if(userObj.command === 'dm') {
      const sendToClient = chatRoom.getClient(userObj.arg);
      sendToClient.write(userObj.text);
    } else if(userObj.command === '@all') {
      const sendToAllUsers = chatRoom.all();
      sendToAllUsers.forEach(client => client.write(userObj.text));
    } else if(userObj.command === 'nick') {
      chatRoom.rename(client.username, userObj.text);
    }
  });
  // If client disconnects
  chatRoom.delete(client);
});

module.exports = server;

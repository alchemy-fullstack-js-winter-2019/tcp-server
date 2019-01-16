/*eslint-disable no-console*/

const { createServer } = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

const server = createServer(client => {
  client.setEncoding('utf8');
  chatRoom.add(client);

  client.on('data', data => {
    // Could also deconstruct object with { comman, arg, text };
    const userObj = parseMessage(data);

    if(userObj.command === 'dm') {
      const sendToClient = chatRoom.getClient(userObj.arg);
      sendToClient.write(`${client.username}: ${userObj.text}`);
    } 
    
    else if(userObj.command === '@all') {
      const sendToAllUsers = chatRoom.all();
      sendToAllUsers.forEach(user => user.write(`${client.username}: ${userObj.text}`));
    } 
    
    else if(userObj.command === 'nick') {
      chatRoom.rename(client.username, userObj.arg);
    }
  });

  client.on('end', () => {
    chatRoom.delete(client);
  });
});

module.exports = server;

import { createServer } from "tls";
var net = require('net');

const chatRoom = new chatRoom();

var server = chatRoom.createServer(7890, client => {
  client.on('data', data => {
    chatRoom.all().forEach()
  });
  client.setEncoding('utf8');
});

server.listen(7890, 'server has been created');

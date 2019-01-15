const chatRoom = new chatRoom();

createServer(7890, client => {
  client.on('data', () => {
    chatRoom.all().forEach(anotherConnectedClient =>
      client.write(data))
  });
});
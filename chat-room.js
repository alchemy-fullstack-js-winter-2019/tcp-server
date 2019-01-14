const { createConnection } = require('net');
// const shortId = require('short-id');

class ChatRoom {
  constructor() {
    this.clients = [];
  }

  add() {
    const client = createConnection(7890, () => {
      console.log('CLIENT CREATED');
    });

    // client.username = `user${shortId.generate()}`;
    client.username = 'user';
    this.clients.push(client);
    console.log(this.clients);
    return client;
  }
}

module.exports = ChatRoom;

const { createConnection } = require('net');
const shortId = require('short-id');

class ChatRoom {
  constructor() {
    this.clients = [];
  }

  add(username) {
    const client = createConnection(7890, () => {
      console.log('CLIENT CREATED');
    });

    client.username = username || `user${shortId.generate()}`;
    this.clients.push(client);
    return client;
  }

  getClient(username) {
    return this.clients.find(client => client.username = username);
  }
}

module.exports = ChatRoom;

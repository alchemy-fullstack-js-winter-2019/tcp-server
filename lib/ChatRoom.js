class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userCount = 1;
  }

  add(client) {
    const username = this.userCount++;
    client.username = `user${username}`;
    this.clients.set(client.username, client);
    return client;
  }
}

module.exports = ChatRoom;

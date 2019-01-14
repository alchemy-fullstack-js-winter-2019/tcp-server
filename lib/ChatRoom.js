//A class that tracks clients (users) in the chat room
class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.number = 1;
  }

  add(client) {
    client.username = `user${this.number++}`;
    this.clients.set(client.username, client);
  }

  get(username) {
    return this.clients.get(username);
  }

  rename(client, newName) {
    const oldUsername = (client);
    oldUsername.username = newName;
    this.clients.set(oldUsername, client);
    return client;
  }

  all() {
    return [...this.clients.values()];
  }
}

module.exports = ChatRoom;

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

  getClient(username) {
    return this.clients.get(username);
  }

  rename(client, newName) {
    if(this.clients.has(newName)) {
      return false;
    }
    this.clients.delete(client.username);
    client.username = newName;
    this.clients.set(newName, client);
    return client;
  }
 
  all() {
    return [...this.clients.values()];
  }
}

module.exports = ChatRoom;

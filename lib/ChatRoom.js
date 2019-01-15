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

  rename(username, newName) {
    if(this.clients.has(newName)) {
      return false;
    }
    const client = this.clients.get(username);
    this.clients.delete(username);
    client.username = newName;
    this.clients.set(newName, client);
    return client;
  }
 
  all() {
    return [...this.clients.values()];
  }

  getBroadcastList(client) {
    return this.clients.all().filter(x => x !== client);
  }
}

module.exports = ChatRoom;

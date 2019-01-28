class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userNumber = 1;
  }

  add(client) {
    client.username = `user-${this.userNumber++}`;
    this.clients.set(client.username, client);
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(username, newUsername) {
    if(this.clients.has(newUsername)) {
      return false;
    }
    const client = this.clients.get(username);
    this.clients.delete(client.username);
    client.username = newUsername;
    this.clients.set(newUsername, client);
    return true;
  }

  all() {
    return [...this.clients.values()];
  }

}

module.exports = ChatRoom;

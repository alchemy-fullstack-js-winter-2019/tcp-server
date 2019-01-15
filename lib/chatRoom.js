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
    let client = this.clients.get(username);
    this.clients.delete(username);
    client = newUsername;
    this.clients.set(newUsername, client);
    return true;
  }

  all() {
    return [...this.clients.values()];
  }

}

module.exports = ChatRoom;

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

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    const client = this.clients.get(oldName);
    const deleted = this.clients.delete(oldName);
    client.username = newName;
    this.clients.set(newName, client);
    return deleted;
  }
}

module.exports = ChatRoom;

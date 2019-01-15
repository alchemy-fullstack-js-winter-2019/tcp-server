const shortid = require('shortid');

class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = shortid.generate();
    client.username = `user-${username}`;
    this.clients.set(client.username, client);
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, wantedName) {
    const client = this.clients.get(oldName);
    const deleted = this.clients.delete(oldName);
    client.username = wantedName;
    this.clients.set(wantedName, client);
    return deleted;
  }

  all() {

  }
}

module.exports = ChatRoom;

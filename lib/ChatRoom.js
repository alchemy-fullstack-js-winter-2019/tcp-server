const shortid = require('shortid');

//A class that tracks clients (users) in the chat room
module.exports = class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = shortid.generate();
    client.username = username;
    this.clients.set(username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    const client = this.clients.get(oldName);
    this.clients.delete(oldName);
    client.username = newName;
    const newUser = this.clients.set(newName, client);
    return newUser;
  }

  all() {
    return [...this.clients.values()];
  }

};

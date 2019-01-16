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
    if(this.clients.has(newName)) return false;
    if(oldName) {
      const client = this.clients.get(oldName);
      this.clients.delete(oldName);
      client.username = newName;
      const newUser = this.clients.set(newName, client);
      return newUser;
    } else {
      return null;
    }
  }

  all() {
    return [...this.clients.values()];
  }

};

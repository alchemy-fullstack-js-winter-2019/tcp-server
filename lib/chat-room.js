// const { createConnection } = require('net');
const shortId = require('short-id');

class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = shortid.generate();
      client.username = `user. ${username}`;
      this.clients.set(client.username, client);
      return client;
    });

    getClient(username) {
      return this.clients.get(username);
    }
  
  rename(oldName, newName) {
    const client = this.clients.get(oldName)
    const deleted = this.clients.delete(oldName);
    client.username = newName;
    this.clients.set(client.username, client);
    return deleted;
  }

  all() {
    return
  }
  
module.exports = ChatRoom;


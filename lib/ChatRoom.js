const shortid = require('shortid');

//A class that tracks clients (users) in the chat room
module.exports = class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    const username = shortid.generate();
    client.username = username;
    this.clients.set(`user${username}`, client);
    console.log(this.clients);
    return client;
  }

  getClient(username) {

  }

  rename(oldName, newName) {

  }

  all() {

  }

};

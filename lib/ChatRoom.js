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
    // console.log(this.clients);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    // get oldName client
    // delete the key value pair for oldName
    // add a new pair for newName and client
    // return
  }

  all() {
    return this.clients;
  }

};

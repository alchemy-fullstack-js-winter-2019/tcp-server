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
    // get oldName client
    const client = this.clients.get(oldName);
    // delete the key value pair for oldName
    this.clients.delete(client.username);
    // set the clients username to newName
    client.username = newName;
    // add a new pair for newName and client
    const newUser = this.clients.set(newName, client);
    return newUser;
  }

  all() {
    // console.log([...this.clients.values()]);
    return [...this.clients.values()];
  }

};

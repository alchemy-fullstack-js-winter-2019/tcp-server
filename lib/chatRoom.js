const shortid = require('shortid');

class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    // create a unique username
    const username = shortid.generate();
    // add that username to client
    client.username = `user-${username}`;
    // add client to this.clients
    this.clients.set(client.username, client);
  }

  getClient(username) {
    // return the client with said username
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    // get oldName, client
    // delete the key value pair for old name
    // add a new pair for newName and client
    // return
  }
}

module.exports = ChatRoom;

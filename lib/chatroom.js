const shortid = require('shortid');

class Chatroom {
  constructor() {
    this.clients = new Map();

    // this.client = {
    //   user0 -> client,
    //   user1 -> client, 
    //   user2 -> client
    // }
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
    //get oldName client
    const user = this.clients.get(oldName);
    //delete the key value pair for old name
    this.clients.delete(user.username);
    //add a new pair for newName and client
    this.client.username = newName;
    //set the client's username to newName
    const newUser = this.clients.set(newName, this.client);
    //return 
    return newUser;
  }

  all() {
    //returns all clients
  }
}

module.exports = Chatroom;

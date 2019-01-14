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
    //returns the client with said username
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    const username = this.clients.getClient(oldName);
    console.log(oldName);
    //get oldName client
    //delete the key value pair for old name
    //add a new pair for newName and client
    //return 
  }
}

module.exports = Chatroom;

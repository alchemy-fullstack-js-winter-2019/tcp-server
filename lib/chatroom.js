const shortid = require('shortid');
const fs = require('fs');

class ChatRoom {
  constructor() {
    this.clients = new Map();

    this.clients = {
      // username -> client,
        user1: client,
        user2: client,
        user3: client
    }
  }

  add(client) {
    //create a unique username
    const username = shortid.generate();
    // add that username to client
    client.add(username);
    // add client to this.clients
    this.clients.add(client);
    // return client
    return client;
  }

  getClient(username) {
    //returns the client with said username
    return this.client.username;
  }

  rename(oldName, newName) {
    // get oldName client
    oldName.getClient();
    // delete the key value pair for old name
    oldName.delete(username);
    // add a new pair for newName and client
    newName.add(username);
    newName.add(client);
    // return
    return newName;
  }

  all() {
    // returns all clients
    return this.clients;
  }
}

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
    //create a unique username
    const username = shortid.generate();
    client.username = username;
    //add that username to client
    this.clients.set(username, client);
    //add client to map
    console.log(this.clients);
    //return client
    return client;
  }

  getClient(username) {
    //returns the client with said username
    
  }

}

module.exports = Chatroom;

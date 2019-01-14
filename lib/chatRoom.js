const { createConnection } = require('net');


class ChatRoom {
  constructor () {
    this.clients = new Map(); //insdie the map is where we are going to store usernames
    this.clientList = {};
    this.saveClient = this.saveClient.bind(this);

    // this.clients = {
    //   user0 ->client
    //   user1 -> client
    // }
  }

  add(client) {
    //create a unique username
    //add that username to client
    //add client to this.clients
    //return clients
  }

  get(client) {
    //returns the client with said username
  }

  rename(oldName, newName) {
    //get oldName client
    //delete the key value pair for old name
    // add a new pari for newName and client
    //return
  }
  all() {
    //return all
  }

  SaveClient(username, client) {
    this.clientList[username] = client;
  }
}
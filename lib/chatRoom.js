// const { createConnection } = require('net');
const shortid = require('shortid');


class chatRoom {
  constructor() {
    this.clients = new Map(); //insdie the map is where we are going to store usernames
    this.userCount = 0;

  }

  add(client) {
    //create a unique username
    const username = shortid.generator();
    
    // this.userCount++;
    // this.username
    // map = Object.create()
    //add that username to client
    client.username = username; //(`user- ${username}`);
    //add client to this.clients - added a value or map to be able to look them up in the future
    this.clients.set(client.username, client); //client is what we want to look up
    //return clients
    return client;
  }

  get(username) {
    //returns the client with said username
    return this.clients.get(username);
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

}

module.exports = chatRoom;

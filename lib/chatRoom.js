// const { createConnection } = require('net');
const shortid = require('shortid');


class chatRoom {
  constructor() {
    this.clients = new Map(); //insdie the map is where we are going to store usernames
    this.userCount = 0;
    //this.clients = {
    //user0 -> someClient we want to delete

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
    const client = this.client.get(oldName);
    // this.clients.get(username);
    //delete the key value pair for old name - look up delete
    const deleted = this.clients.delete(oldName); //this.clients.delete(username)
    //set the clients username to newName - look at add method
    client.username = newName;
    // add a new pari for newName and client - look at add method
    this.client.set(newName, client);
    //return
    return deleted;

  }
  all() {
    //return all
  }

}

module.exports = chatRoom;

// const { createConnection } = require('net');
const shortid = require('shortid');


class chatRoom {
  constructor() {
    this.clients = new Map(); // map contatins usernames
    this.userCount = 0;
  }

  add(client) {
    const username = shortid.generate(); //uses shortid to create unique username
    client.username = username; //(`user- ${username}`);
    this.clients.set(client.username, client); 
    return client;
  }

  get(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    const client = this.clients.get(oldName);
    const deleted = this.clients.delete(oldName); 
    client.username = newName;
    this.clients.set(newName, client);
    return deleted;

  }
  all() {
    //return all
  }

}

module.exports = chatRoom;

class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    // create a unique username
    client.username = 'user' + this.clients.size;
    // add that username to client
    this.clients.set(client);
    // add client to this.clients
  }

  getClient(username) {
    // returns the client with said username

  }

  // rename(oldName, newName) {
  // get oldName client
  // delete the key value pair for old name
  // add a new pair for newName and client
  //return
  // }

  // all() {
  // return all clients
  // }
}

module.exports = {
  ChatRoom
};
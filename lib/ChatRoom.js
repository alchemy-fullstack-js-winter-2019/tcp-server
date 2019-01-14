class ChatRoom {
  constructor() {
    this.clients = new Map();
  }

  add(client) {
    // create a unique username
    client.username = this.clients.size + 1;
    // add that username to client
    this.clients.set(client.username, client);
    // add client to this.clients
    return client;
  }

  getClient(username) {
    // returns the client with said username
    return this.clients.get(username);

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
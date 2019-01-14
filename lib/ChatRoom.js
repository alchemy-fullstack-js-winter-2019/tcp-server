class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userNumber = 0;

  }
  add(client) {
    // create a unique username
    // add that username to client
    client.username = `user${this.userNumber++}`;
    // add client to this.clients
    // return client
    return this.clients.set(client.username, client);
    
  }

  // getClient(username) {
  // returns the client with said username
  // }

  // rename(oldName, newName) {
  // get oldName client
  // delete the key value pair for old name
  // add a new pair for newName and client
  // return

  // }
}

module.exports = ChatRoom;


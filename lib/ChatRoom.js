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
    this.clients.set(client.username, client);
    return client;
    
  }

  getClient(username) {
  // returns the client with said username
    return this.clients.get(username);

  }

  rename(oldName, newName) {
    if(this.clients.has(newName)) {
      return false;
    }
    // get oldName client
    const client = this.clients.get(oldName);
    // delete the key value pair for old name 
    const deleted = this.clients.delete(oldName);
    // `delete` method
    client.username = newName;
    // set the clients user name to newName
    this.clients.set(newName, client);
    // add a new pair for newName and client
    return deleted;
  }

  all() {
    // returns all clients
    return [...this.clients.values()];  
  }

  getBroadcast(client) {
    return this.all().filter(c => c !== client);
  }

  remove(client) {
    this.clients.delete(client.username);
  }
}

module.exports = ChatRoom;

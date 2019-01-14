class ChatRoom {

  constructor() {
    this.clients = new Map();


  }

  generateUsername() {
    return Math.random().toString(36).substring(2);
  }

  add(client) {
    const usernameGenerated = this.generateUsername();
    client.username = usernameGenerated;
    this.clients.set(client.username, client);
    return this.clients;
  }

  getClient(username) {
    return this.clients.has(username);
  }

  renameClient(oldName, newName) {
    const oldUsername = this.getClient(oldName);
    
    //get oldName client
    //delete the key value pair for the old name
    //add a new pair for newName and client
    //return
  }

  // all() {
  //   //return all clients
  // }

}

module.exports = { ChatRoom };

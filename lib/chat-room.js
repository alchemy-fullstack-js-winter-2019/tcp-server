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
    const client = this.clients.get(username);
    client ? client : false;
  }

  renameClient(oldName, newName) {
    const client = {};
    const oldUsername = this.getClient(oldName);
    this.clients.delete(oldUsername);
    client.username = newName;
    this.clients.set(client.username, client);
    return true;
  }

  // all() {
  //   //return all clients
  // }

}

module.exports = { ChatRoom };

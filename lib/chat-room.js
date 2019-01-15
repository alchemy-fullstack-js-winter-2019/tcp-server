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
    return this.getClient(client.username);
  }

  getClient(username) {
    const client = this.clients.get(username);
    return (client ? client : false);
  }

  renameClient(oldName, newName) {
    if(this.clients.has(newName)) 
      return console.log('name taken');

    const client = {};
    this.clients.delete(oldName);
    client.username = newName;
    this.clients.set(client.username, client);
    return true;
  }

  all() {
    return [...this.clients.values()];
  }

}

module.exports = { ChatRoom };

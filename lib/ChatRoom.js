
class ChatRoom { 

  constructor() {
    this.clients = new Map();
    this.userNumber = 0;
  }

  add(client) {
    this.userNumber++;
    client.username = `username${this.userNumber}`;
    this.clients.set(client.username, client);
    return client;
  }
  
  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    const client = this.clients.get(oldName);
    this.clients.delete(oldName);
    this.clients.set(newName, client);
    return newName;
  }

  all() {
    return [...this.clients.values()];
  }
}



module.exports = ChatRoom;

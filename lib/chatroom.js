
class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userCount = 1;
  }

  add(client) {
    
    
    client.username = `user-${this.userCount++}`;
    this.clients.set(client.username, client);
    return client;
  }

  getClient(username) {
    return this.clients.get(username);
  }

  rename(oldName, newName) {
    if(this.clients.has(newName)) {
      return false;
    }
    const client = this.clients.get(oldName);
  
    const deleted = this.clients.delete(oldName);
    client.username = newName;

    this.clients.set(newName, client);

    return deleted;
  }

  all() {
    return [...this.clients.values()];
  }

  getBroadcastList(client) {
    return this.all().filter(x => x !== client);
  }

}

module.exports = ChatRoom;

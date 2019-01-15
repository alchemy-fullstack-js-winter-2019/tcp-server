class ChatRoom {
  constructor() {
    this.clients = new Map();
    this.userNumber = 1;
  }
  getAll() {
    return [...this.clients.values()];
  } 
  add(client) {
    const username = `user${this.userNumber++}`; 
    client.username = client.username || username;
    this.clients.set(client.username, client);
  }
  getClient(username) {
    return this.clients.get(username);
    
  }
  rename(oldName, newName) {
    if(this.clients.has(newName)) return false;
    
    else {
      const user = this.getClient(oldName); 
      this.clients.delete(user);
      const client = this.add({ username: newName });
      this.clients.set(client);
      return this.getClient(newName); 
    }
  }
}
module.exports =  ChatRoom;

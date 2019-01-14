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
    client.username = username;
    this.clients.set(client.username, client);
  }
  getUser(username) {
    return this.clients.get(username);
    
  }
  rename() {
  
  }
  getClient() {

  }
}

module.exports =  ChatRoom;

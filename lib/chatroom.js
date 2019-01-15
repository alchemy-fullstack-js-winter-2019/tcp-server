
class ChatRoom {
  constructor(){
    this.clients = new Map();
    this.userNumber = 0;
  }
  add(client) {
    client.userName = this.userNumber++;
    this.clients.set(client.username, client);
    return client;

  }
  getClient(username){
    return this.clients.get(username);
  }

}

module.exports = ChatRoom;

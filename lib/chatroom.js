
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
  rename(ogName, newName) {
    if(this.clients.has(newName)) return false;
    let clientsKey = this.clients.get(ogName);
    this.clients.delete(ogName);
    clientsKey.username = newName;
    this.clients.set(clientsKey.userName, clientsKey);
    return clientsKey;
  }

}

module.exports = ChatRoom;


class ChatRoom {
  constructor(){
    this.clients = new Map();
    this.userNumber = 0;
  }
  add(client) {
    client.userName = this.userNumber++;
    console.log('CLIENT USERNAME', client);
    return this.clients.set(client.username, client);

  }
  getClient(username){
    return this.clients.get(username);
    //returns client
  }
  // rename(oldName, wantedName){
  //   const client = this.clients.get(oldName);
  //   const deleted = this.clients.delete(oldName);
  //   client.userName = wantedName;
  //   this.client.set(wantedName, client);

  // }

}

module.exports = ChatRoom;

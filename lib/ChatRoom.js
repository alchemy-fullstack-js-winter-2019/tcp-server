class ChatRoom {
  constructor() {
    this.clients = new Map();

    // this.clients = {
    // user0 -> client,
    // user1 -> client,
    // user2 -> client
    // }

  }
  add(client) {
    // create a unique username
    // add that username to client
    // add client to this.clients
    // return client
  }

  getClient(username) {
    // returns the client with said username
  }

  rename(oldName, newName) {
    // get oldName client
    // delete the key value pair for old name
    // add a new pair for newName and client
    // return

  }
}


const ChatRoom = require('../lib/chatroom')

describe ('ChatRoom', () => { 
   beforeEach(() => {
    chatroom = new ChatRoom();
   });

  it('adds a client ', () => {
    const client = {}; 
    chatroom.add(client);
    expect(client.username).toBeDefined();
  });
  it('returns the client with said username', () => {
    const client = {};  
    const addClient = chatroom.add(client);
    const foundClient = chatroom.getClient(client.username);
    expect(foundClient).toEqual(client);
  });
  it('renames the old username to new new username', () => {
    const client = {};  
    const addClient = chatroom.add(client);
    //get client by old name 
    //delete old key:value pair - use delete method
    //add a new pair or new client
    //set clients username to new username
    //someClientUserName = newUsername
  })

  
});
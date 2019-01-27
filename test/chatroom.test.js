const ChatRoom = require('../lib/chatroom');


describe ('ChatRoom', () => { 
  let chatroom = null;
  let clients = null;

  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  beforeEach(() => {
    clients = { client: 1 };
    chatroom.add(clients);
  });

  it('adds a client ', () => {
    const clients = {}; 
    chatroom.add(clients);
    
    expect(clients.username).toBeDefined();
  });

  it('returns the client with said username', () => {
    const clients = {};  
    chatroom.add(clients);
    const foundClient = chatroom.getClient(clients.username);
   
    expect(foundClient).toEqual(clients);
  });
  
  it('renames the old username to new new username', () => {
    const clients = {};  
    chatroom.add(clients);
    //get oldName from client  
    const renameUser = chatroom.rename(clients.username, 'bob');
    //delete old key:value pair - use delete method
    expect (chatroom.rename(clients.username, 'bob')).toBeTruthy();
    expect(renameUser).toEqual(true);
    // expect(client.username).toEqual('bob');
    expect(chatroom.getClient(clients)).toBeFalsy();
  });

  it('cannot rename to an existing username', () => {
    const client1 = {};
    const client2 = {};
    chatroom.add(client1);
    chatroom.add(client2);

    chatroom.rename(client1.username, client2.username);

    expect(client1.username).not.toEqual(client2.username);
  });

  it('gets a list of all clients', () => {
    Array.from(Array(5)).forEach(() => chatroom.add({}));

    const all = chatroom.all();
    // expect(all).toHaveLength(6);
    expect(all).toContain(clients);

  });
});
  


  

  


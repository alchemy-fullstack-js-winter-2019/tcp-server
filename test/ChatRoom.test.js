const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  it('can add a client', () => {
    // const client {}
    const client = {};
    const chatroom = new ChatRoom();
    // call the chatroom.add(client)
    chatroom.add(client);
    // expect client.username is defined
    expect(client.username).toBeDefined();
  });
  
  it('gets the client with said username', () => {
    const client = {};
    const chatroom = new ChatRoom();
    chatroom.add(client);

    const gotClient = chatroom.getClient(client.username);
    expect(gotClient).toEqual(client);
  });

});




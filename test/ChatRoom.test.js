const { ChatRoom } = require('../lib/ChatRoom');

describe('ChatRoom', () => {
  
  it('can add a client', () => {
    const chatroom = new ChatRoom();
    //const client = {}
    const client = {};
    //call the chatroom.add(client)
    chatroom.add(client);
    // expect client.username is defined
    expect(client.username).toEqual('user0');
  });
});
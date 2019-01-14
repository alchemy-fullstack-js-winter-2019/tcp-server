const ChatRoom = require('../lib/ChatRoom');

describe('chatroom tests', () => {
  it('can add clients', () => {
    const chatroom = new ChatRoom();
    const client = {};
    chatroom.add(client);

    expect(client.username).toEqual(1);
  });

  it('returns the user that is associated with a username', () => {
    const chatroom = new ChatRoom();
    
    const c1 = chatroom.add({});

    const returnedClient = chatroom.getClient(c1.username);


    expect(returnedClient.username).toEqual(c1.username);
  });
});


const ChatRoom = require('./ChatRoom');

describe('chatroom tests', () => {
  it('name was returned as username property of client object', () => {
    const chatroom = new ChatRoom;
    const client = {};
    chatroom.add(client);

    expect(client.userName).toEqual('USER0');
  });

  it('returns the user that is associated with a userName', () => {
    const chatroom = new ChatRoom;
    const client = {};
    chatroom.add(client);

    returnedClient = chatroom.getClient('USER0');

    expect(returnedClient).toEqual(client);
  });
});


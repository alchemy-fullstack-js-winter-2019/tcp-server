const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  let chatroom = null;

  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('takes a socket, assigns random username, and stores by user name', () => {
    const client = {};
    chatroom.add(client);
    expect(client.username).toEqual(expect.any(String));
    expect(client.username).toBeDefined();
  });
  it('returned object is the same', () => {
    const client = {};
    chatroom.add(client);
    const foundUser = chatroom.getClient(client.username);
    expect(foundUser.username).toEqual(client.username);
  });

  

});

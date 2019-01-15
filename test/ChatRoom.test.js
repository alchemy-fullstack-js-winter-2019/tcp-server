const ChatRoom = require('../lib/ChatRoom');

describe('chatroom tests', () => {
  let chatroom = null;

  beforeEach(() => {
    chatroom = new ChatRoom();
  });

  it('can add clients', () => {
    const client = {};
    chatroom.add(client);

    expect(client.username).toEqual(1);
  });

  it('returns the user that is associated with a username', () => {
    const c1 = chatroom.add({});
    const returnedClient = chatroom.getClient(c1.username);
    console.log(returnedClient);

    expect(returnedClient).toEqual(c1);
  });

  it('renames a user', () => {
    
    


    expect(chatroom.rename(1, 69)).toEqual(true);
    expect(chatroom.getClient(1)).toEqual(undefined);
    expect(chatroom.getClient(69)).toEqual({ username: 69 });
    expect(client.username).toEqual(69);
  });
});


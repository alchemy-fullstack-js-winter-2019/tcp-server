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

    expect(returnedClient).toEqual(c1);
  });

  it('renames a user', () => {
    const c1 = chatroom.add({});
    chatroom.rename(c1.username, 69);
    const results = chatroom.getClient(69);

    expect(chatroom.rename(1, 69)).toBeTruthy();
    expect(chatroom.getClient(69)).toEqual({ username: 69 });
    expect(results.username).toEqual(69);
  });
});


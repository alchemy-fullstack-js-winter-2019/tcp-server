const ChatRoom  = require('../lib/chatroom');

describe('ChatRoom', () => {
  let chatroom = null;
  const c1 = {};
  const c2 = {};
  const c3 = {};

  beforeEach(() => {
    chatroom = new ChatRoom();
    chatroom.add(c1);
    chatroom.add(c2);
    chatroom.add(c3);

  });

  it('can add a client', () => {
    const client = {};
    chatroom.add(client);
    expect(client.username).toBeDefined();
  });

  it('the username is the same', () => {
    const foundClient = chatroom.getClient(c1.username);

    expect(foundClient).toEqual({ username: expect.any(String) });
  });
  it('renames a username', () => {
    const oldName = c1.username;
    const renamedUser = chatroom.rename(c1.username, 'dog');

    expect(renamedUser).toEqual(true);
    expect(c1.username).toEqual('dog');
    expect(chatroom.getClient(oldName)).toBeFalsy();
  });
  it('returns all the clients', () => {

    const allClients = chatroom.all();
    expect(allClients).toEqual([c1, c2, c3]);
  });
});

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

    const originalName = chatroom.getClient(1);

    expect(chatroom.rename(c1.username, 69)).toBeTruthy();
    expect(chatroom.getClient(originalName)).toBeFalsy();
    expect(chatroom.getClient(69)).toEqual({ username: 69 });
  });

  it('fails if they try to rename with same username', () => {
    const c1 = chatroom.add({});
    const c2 = chatroom.add({});

    const results = chatroom.rename(c1.username, c2.username);
    
    expect(results).toBeFalsy();
  });

  it('returns array of everything in chatroom', () => {
    const c1 = chatroom.add({});
    const c2 = chatroom.add({});

    const allClients = chatroom.getAll();

    expect(allClients).toEqual([c1, c2]);
  });
});


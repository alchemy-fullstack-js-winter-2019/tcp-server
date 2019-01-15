const Chatroom = require('../lib/chatroom');

describe('Chatroom', () => {
  let chatroom = null;
  beforeEach(() => {
    chatroom = new Chatroom();
  });

  it('can add a client', () => {
    //call the chatroom.add method on a client
    const client = {};
    chatroom.add(client);
    expect(client.username).toBeDefined();
  });

  it('returns the client with said username', () => {
    const client = {};
    chatroom.add(client);
    const chosen = chatroom.getClient(client.username);
    expect(chosen.username).toEqual(client.username);
  });

  it('renames a user', () => {
    const client = {};
    chatroom.add(client);
    const rename = chatroom.rename(client.username, 'banana');
    // expect(chatroom.rename(client.username, 'banana')).toBeTruthy();
    // expect(chatroom.get('banana')).toBeDefined();
    // expect(chatroom.get(client.username)).toBeUndefined();
    expect(rename.username).toEqual('banana');
  });

});


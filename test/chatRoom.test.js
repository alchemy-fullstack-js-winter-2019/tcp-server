const ChatRoom = require('../lib/chatRoom');

describe('ChatRoom', () => {
  const client1 = {};
  const client2 = {};
  let chatRoom = null;

  beforeEach(() => {
    chatRoom = new ChatRoom();
    chatRoom.add(client1);
    chatRoom.add(client2);
  });

  it('adds a client in my chatroom', done => {
    const client3 = {};
    chatRoom.add(client3);
    expect(client3.username).toEqual('bitter_breeze');
    expect(client3).toBeDefined();
    done();
  });

  it('gets a client by username', done => {
    chatRoom.getClient('bitter_breeze');
    expect(client2.username).toEqual('bitter_breeze');
    done();
  });

  it('renames a user', done => {
    const client = {};
    chatRoom.add(client);
    expect(chatRoom.rename(client.username, 'Aaron23')).toBeTruthy();
    expect(client.username).toEqual('Aaron23');

    done();
  });

  it('returns a list of all clients in map', done => {
    chatRoom.all();
    expect(chatRoom).toEqual({});
    done();
  });

  it('cannot rename to existing username', done => {
    chatRoom.rename('Aaron', 'bitter_breeze');
    expect(client2.username).toEqual();
    done();
  });
});

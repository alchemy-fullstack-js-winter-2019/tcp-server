const ChatRoom = require('../lib/chatRoom');

describe('ChatRoom', () => {
  let chatRoom = null;
  const client1 = {};
  const client2 = {};

  beforeEach(() => {
    chatRoom = new ChatRoom();
    chatRoom.add(client1);
    chatRoom.add(client2);
  });

  it('adds a client in my chatroom', done => {
    const client3 = {};
    chatRoom.add(client3);
    expect(client3.username).toEqual('user-3');
    expect(client3).toBeDefined();
    done();
  });

  it('gets a client by username', done => {
    const foundUser = chatRoom.getClient(client2.username);
    expect(foundUser).toEqual(client2);
    done();
  });

  it.only('renames a user', done => {
    const client4 = {};
    chatRoom.add(client4);
    expect(chatRoom.rename(client4.username, 'user-4')).toBeTruthy();
    expect(client4.username).toEqual('user-4');

    done();
  });

  it('returns a list of all clients in map', done => {
    const allClients = chatRoom.all();
    expect(allClients).toEqual([{ username: 'user-1' }, { username: 'user-2' }]);
    done();
  });

  it('cannot rename to existing username', done => {
    const noRename = chatRoom.rename(client2.username, 'user-1');
    expect(noRename).toBeFalsy();
    done();
  });
});

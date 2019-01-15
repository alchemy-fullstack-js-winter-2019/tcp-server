const ChatRoom = require('../lib/chat-room');

describe('chat room experience', () => {
  let room = null;
  beforeEach(() => {
    room = new ChatRoom();
  });

  it('add', () => {
    expect(room.add('user1').username).toEqual('user1');
  });

  it('getClient', () => {
    const client = room.add('user1');
    expect(room.getClient('user1')).toEqual(client);
  });

  // it('rename returns truthy', () => {
  //   room.add('user1');
  //   expect(room.rename('user1', 'user2')).toBeTruthy();
  // });

  it('rename returns falsy for same username', () => {
    room.add('user1');
    expect(room.rename('user1', 'user1')).toBeFalsy();
  });

  // it('renames returns new client', () => {
  //   room.add('user1');
  //   expect(room.rename('user1', 'user2')).toEqual({ username: 'user2' });
  // });

  it('renames changes username', () => {
    const client = room.add('user1');
    room.rename(client.username, 'user2');
    expect(client.username).toEqual('user2');
  });

  it('rename returns falsy for existing username', () => {
    room.add('user1');
    room.add('user2');
    expect(room.rename('user1', 'user2')).toBeFalsy();
  });

  // it('rename returns original object', () => {
  //   const user1 = room.add('user1');
  //   room.add('user2');
  //   room.rename('user1', 'user2');
  //   expect(user1.username).toEqual('user1');
  // });

  it('all returns all clients', () => {
    const user1 = room.add('user1');
    const user2 = room.add('user2');

    expect(room.all()).toEqual([user1, user2]);
  });

  it('parseMessage returns null', () => {
    expect(room.parseMessage('cmd:param some text')).toEqual(null);
  });

  it('parseMessage returns null', () => {
    expect(room.parseMessage('@cmd:param some text')).toEqual({
      command: 'cmd',
      arg: 'param',
      text: 'some text'
    });
  });
});

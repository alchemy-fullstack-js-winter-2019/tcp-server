const ChatRoom = require('../lib/chatRoom');

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

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
    chatRoom.rename('Aaron', 'Aaron2');
    expect(chatRoom.username).toEqual('Aaron2');

    done();
  });

  it('returns a list of all clients in map', done => {
    chatRoom.all();
    expect(chatRoom).toEqual({});
    done();
  });

  it('cannot rename to existing username', done => {
    chatRoom.rename({ username: 'Aaron' }, 'bitter_breeze'), (err, cannotRename) => {
      expect(err).toBeFalsy();
      expect(cannotRename).toBeFalsy();
    };
    done();
  });
});

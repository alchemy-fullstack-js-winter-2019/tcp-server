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
});

const ChatRoom = require('../lib/chat-room');

describe('chat room experience', () => {
  let room = null;
  beforeEach(() => {
    room = new ChatRoom();
  });

  it('add', () => {
    expect(room.add().username).toEqual('user');
  });
});
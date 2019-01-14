const { ChatRoom } = require('../lib/chat-room');

describe('ChatRoom', () => {
  describe('add', () => {
    it('an instance has a random username and takes a socket', () => {
      const client = {};
      ChatRoom.add(client);
      expect(client.username).toBeDefined();
    });
  });
});

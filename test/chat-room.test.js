const { ChatRoom } = require('../lib/chat-room');

describe('ChatRoom', () => {
  describe('add', () => {
    it('an instance has a random username and takes a socket', () => {
      const newChat = new ChatRoom();
      const client = {};
      newChat.add(client);
      expect(client.username).toBeDefined();
    });
  });

  describe('getClient', () => {
    it('gets a client with username', () => {
      const newChat = new ChatRoom();
      const client = {};
      newChat.add(client);
      expect(newChat.getClient(client.username)).toBeTruthy();
    });
  });

  describe('renameClient', () => {
    it('gets a client by username and renames it', () => {
      const newChat = new ChatRoom();
      const client = {};
      newChat.add(client);
      newChat.renameClient(client.username, 'kater');
      expect(client.username).toEqual('kater');
    });
  });


});

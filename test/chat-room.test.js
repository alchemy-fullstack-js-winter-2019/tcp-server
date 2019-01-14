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
      expect(newChat.getClient(client.username)).toEqual(client);
    });
  });

  describe('renameClient', () => {
    it('gets a client by username and renames it', () => {
      const newChat = new ChatRoom();
      const client = {};
      newChat.add(client);
      const renamedClient = newChat.renameClient(client.username, 'kater')
      expect(renamedClient).toBeTruthy();
      expect(newChat.getClient(client.username)).toBeFalsy();
      expect(newChat.getClient('kater')).toBeTruthy();
      expect(client.username).toEqual(client);
    });
  });


});

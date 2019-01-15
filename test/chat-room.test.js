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
      const clientRenamed = newChat.renameClient(client.username, 'kater');
      expect(clientRenamed).toBeTruthy();
    });

    it('checks for old user to be deleted', () => {
      const newChat = new ChatRoom();
      const client = {};
      newChat.add(client);
      const oldUsername = client.username;
      newChat.renameClient(oldUsername, 'kater');
      expect(newChat.getClient(oldUsername)).toBeFalsy();
    });

    it('checks for new client username to exist', () => {
      const newChat = new ChatRoom();
      const client = {};
      newChat.add(client);
      newChat.renameClient(client.username, 'kater');
      expect(newChat.getClient('kater')).toBeTruthy();
    });
  });


});

const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  let chatroom = null;
  let client1;
  let client2;

  beforeEach(() => {
    chatroom = new ChatRoom();
    client1 = {};
    client2 = {};
    chatroom.add(client1);
    chatroom.add(client2);
  });

  describe('add method', () => {
    it('takes a socket, assigns random username, and stores by user name', () => {
      expect(client1).toEqual({ username: expect.any(String) });
      expect(client2).toEqual({ username: expect.any(String) });
    });
  });

  describe('getClient method', () => {
    it('returned object is the same', () => {
      const foundUser1 = chatroom.getClient(client1.username);
      const foundUser2 = chatroom.getClient(client2.username);
      expect(foundUser1).toEqual(client1);
      expect(foundUser2.username).toEqual(client2.username);
    });
  });

  describe('rename method', () => {
    it('renames a user', () => {
      const originalName = client1.username;
      const newName = 'cool person';
      chatroom.rename(client1.username, newName);
      expect(chatroom.rename).toBeTruthy();
      expect(chatroom.getClient(originalName)).toBeUndefined();
      expect(chatroom.getClient(newName)).toEqual(client1);
      expect(client1.username).toEqual('cool person');
    });

    it('cannot rename username to an existing username', () => {
      const newName = 'Beyonce';
      chatroom.rename(client1.username, newName);
      expect(chatroom.rename(client1.username, newName)).toBeFalsy();
    });
  });

  describe('all method', () => {
    it('returns an array of all clients', () => {
      expect(chatroom.all()).toEqual([client1, client2]);
      expect(chatroom.all()).toHaveLength(2);
    });
  });

});

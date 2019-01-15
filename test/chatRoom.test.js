const ChatRoom = require('../lib/chatRoom');

describe('Chatroom', () => {
  let chatRoom = null;
  beforeEach(() => {
    chatRoom = new ChatRoom();
  });

  it('can add a client', () => {
    const client = {};
    chatRoom.add(client);
    expect(client.username).toBeDefined;
  });

  it('renames a user', () => {
    const client = {};
    chatRoom.add(client);
    const oldName = client.username;
    expect(chatRoom.rename(client.username, 'new')).toBeTruthy();
    expect(client.username).toEqual('new');
    expect(chatRoom.getClient(oldName)).toBeFalsy();
  });
});

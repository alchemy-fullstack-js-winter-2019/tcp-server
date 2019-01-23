const ChatRoom = require('../lib/chat-room.js');

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

  it('renames my user', ()  => {
    const client = {};
    chatRoom.add(client);
    const oldName = client.username;
    expect(chatRoom.rename(client.username, 'jei')).toBeTruthy();
    expect(client.username).toEqual('jei');
    expect(chatRoom.getClient(oldName)).toBeFalsy();
  });

  it('cannot rename')
});

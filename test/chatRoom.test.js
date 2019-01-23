const ChatRoom = require ('../lib/chatRoom');

describe('Chat room', () => {
  let chatRoom = null;
  // let client;
  beforeEach(() => {
    chatRoom = new ChatRoom();
  });

  it('can add a client', () => { 
    const client = {};
    chatRoom.add(client);
    expect(client.username).toBeDefined();
  });

  it('gets a user', () => {
    const client = {};
    chatRoom.add(client);
    expect(chatRoom.get(client.username)).toEqual(client);
  });

  it('renames my user', () => {
    const client = {};
    chatRoom.add(client);
    expect(chatRoom.rename(client.username, 'ryan')).toBeTruthy();
  });

  it('can not rename to existing user name', () => {
    const clientOne = {};
    const clientTwo = {};
    chatRoom.add(clientOne);
    chatRoom.add(clientTwo);
    chatRoom.rename(clientOne.username, clientTwo.username);
    expect(clientOne.username).not.toEqual(clientTwo.username);
  });
});

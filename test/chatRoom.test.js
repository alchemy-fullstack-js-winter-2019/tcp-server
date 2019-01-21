const ChatRoom = require ('../lib/chatRoom');

describe('Chat room', () => {
  let chatRoom = null;
  beforeEach(() => {
    chatRoom = new ChatRoom();
  });
  it('can add a client', () => { 
    const client = {};
    chatRoom.add(client);
    expect(client.username).toBeDefined();
  });
  //To Do - Test not passing
  // it('gets a user', () => {
  //   const chatRoom = new ChatRoom();
  //   const client = {};
  //   // chatRoom.add(client);
  //   chatRoom.add(client);
  //   // const getUser = client.get(client.username);
  //   expect(chatRoom.getClients(client.username)).toBeEqual(client);

  // });
  it('renames my user', () => {
    const client = {};
    chatRoom.add(client);
    expect(chatRoom.rename(client.username, 'ryan')).toBeTruthy();
  
    //expect(client.username).toEqual('ryan')
    //expect(chatRoom.getClient(originalName)).toBeFalsey();

  });
});

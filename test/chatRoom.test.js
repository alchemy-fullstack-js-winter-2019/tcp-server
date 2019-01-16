const ChatRoom = require('../lib/chatRoom');

describe('ChatRoom', () => {
  const chatRoom = new ChatRoom();
  it('can add a client', () => {
    const client = {};
    chatRoom.add(client);
    expect(client.username).toBeDefined();
  });

  it('can retreive a client', () => {
    const client = {};
    const thisOne = chatRoom.getClient(client); //was .username
    expect(thisOne).toBeTruthy; //was .username
  });

  it('can rename a client', () => {
    const client = {};
    chatRoom.add(client); //
    const oldName = client.username; //
    const newName = chatRoom.rename(client.username, 'Ryan'); 
    expect(newName).toBeTruthy;                  //chatRoom.add(client);
    expect(chatRoom.getClient(oldName)).toBeFalsy;
  });

  it('can list all clients', () => {
    const client = {};
    const allOfThem = chatRoom.all(client);
    expect(allOfThem.length).toEqual(chatRoom.all(client).length);
  });

});


const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

  const c1 = {};
  const c2 = {};
  const c3 = {};

  let chatRoom = null;

  beforeEach(() => {
    chatRoom = new ChatRoom();
    chatRoom.add(c1);
    chatRoom.add(c2);
    chatRoom.add(c3);
  });

  it('assigns random user name', () => {
    expect(c1.username).toEqual('user1');
    expect(c2.username).toEqual('user2');
    console.log('!!!!', c2);
    expect(c3.username).toEqual('user3');
  });
});

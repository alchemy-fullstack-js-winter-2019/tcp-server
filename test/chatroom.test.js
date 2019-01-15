const ChatRoom = require('../lib/chatroom');

describe('chatRoom', () => {
  let cr = null;
  let c1 = {};

  beforeEach(() => {
    c1 = {};
    cr = new ChatRoom();
  });
  it('can add a client', () => {
    const newClient = cr.add(c1);
    expect(newClient).toBeDefined;
  });
});


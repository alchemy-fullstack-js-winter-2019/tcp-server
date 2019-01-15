const chatroom = require('../lib/chatroom');

describe('ChatRoom', () => {
  let chatroom = null;
  
  it('can add a client', done => {
    //const client = {}
    chatroom.add({ username: 'abel' }, (err, createdClient) => {
      expect(err).toBeFalsy;
      //expect client.username is defined
      expect(createdClient).toEqual({ username: 'abel' });
      done();
    });
  });
  
  it('asserts that a name was returned as the username property of the client', (this.client.username, username) => {
    console.assert.equal(client.username, username);
    expect(username).toEqual(client.username);
  });
  
  it('asserts that the name was assigned as a property to the client object', (client.username, username) => {
    console.assert.equal(client.username, username);
    
  });
  
  it('passes in the username returned from the add call and asserts the object is the same as what you supplied to the add call', done => {
  
  });

  it('can not rename to existing user name', (username) => {

  })
});

describe('parseMessage', () => {
  it('returns an object with command, arg, and text', (command, arg, text) => {
    command: 'cmd',
    arg: 'param',
    text: 'some text'
  });
});

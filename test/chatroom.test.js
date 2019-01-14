const Chatroom = require('../lib/chatroom');




describe(' test various chatroom methods', () => {
    let chatroom = null;
    beforeEach(() => {
        chatroom = new Chatroom();
    });


    it('can add a new client(user) to the chatroom', () => {
        const client = {};
        const clientUsername = chatroom.add(client);
        expect(client.username).toEqual(clientUsername.username);
        expect(client.username).toBeDefined();

    });
    it('can get a client by value', done => {
        // const client = {};
        const c1 = chatroom.add({});
        const c2 = chatroom.add({});
        const returnedClient = chatroom.getClient(c2.username);
        console.log(returnedClient);

        expect(returnedClient.username).toEqual(c2.username);


        done();

    });


});





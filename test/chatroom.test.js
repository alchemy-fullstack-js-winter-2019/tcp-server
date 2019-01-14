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
    it('can get a client by value', () => {
        // const client = {};
        const c1 = chatroom.add({});
        const c2 = chatroom.add({});
        const returnedClient = chatroom.getClient(c1.username);
        console.log(returnedClient);

        expect(returnedClient.username).toEqual(c1.username);
    });
    it('can rename an username', () => {
        const c1 = chatroom.add({});

        const renamedClient = chatroom.rename(c1, 'bob');

        expect(renamedClient.username).toEqual('bob');

    })


});





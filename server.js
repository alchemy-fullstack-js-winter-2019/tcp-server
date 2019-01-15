const server = require('./lib/app');


// defines what localhost port to run the server on 3000 in this example
server.listen(3000, () => {
    console.log('server started on port 3000');
});




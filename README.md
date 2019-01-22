# TCP Server - lab 5

**Author**: [Cari Palazzolo](https://github.com/caripizza)

## Overview
In this lab, I implemented a TCP Chat server that allows clients to connect and chat using short commands (@all, @dm, @nick); includes unit tests.

Example short commands offered to clients in ChatRoom:\
@all hello world!\
@dm:exampleuser Hello this is a direct message!\
@nick:newusername


## Technologies used
Node.js, JavaScript, [Jest](https://www.npmjs.com/package/jest), [shortid](https://www.npmjs.com/package/shortid)

## Getting Started
1. Clone and download [GitHub repo](https://github.com/caripizza/tcp-server)
1. Install dependencies:\
`npm i`

3. Run scripts:\
`npm run test`\
`npm run test:watch`\
`npm run lint`\
`npm run pretest`\
`npm run start` (start ChatRoom server)\
`npm run start:client` (add clients to ChatRoom)

## License
Standard [MIT](/LICENSE.md)

## Acknowledgements
Forked from: https://github.com/alchemy-fullstack-js-winter-2019/tcp-server

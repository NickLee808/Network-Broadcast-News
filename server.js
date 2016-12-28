// jshint esversion: 6

const net = require('net');

let counter = 0;
let clientsCount = 0;

//callback function gets invoked for every client socket connection
let server = net.createServer((socket) => {
  socket.on('data', (chunk) => {
    counter++;
    socket.write(`the current msg count is ${counter}`);

    console.log(`chunk from client: ${chunk}`);
    console.log(`the current message count is: ${counter}`);
  });
  
  process.stdin.on('data', (cmd) => {
    socket.write(cmd);
  });

  clientsCount++;
  console.log(`the current client count is: ${clientsCount}`);
});

server.listen(6969, '0.0.0.0', () => {
  console.log(`opened server on`, server.address());
});
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const PORT = process.env.PORT || 9090;

const server = app.listen(PORT, () => {
  console.log(`Websocket in ${PORT}`)
});

app.use(express.static(__dirname+'/public'));

const io = new Server(server);
let messages = [];

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);
  socket.emit('welcome', 'Welcome to the Websocket chat')
  socket.on('message', (data) => {
    // console.log('Server data =>', data);
    messages.push(data);
    io.emit('messagelog', messages)
  });
});

const socket = io();
let input = document.getElementById('message');
let user = document.getElementById('user');
let log = document.getElementById('messages');

input.addEventListener('keyup', (e) => {
  if (e.key == "Enter")
    socket.emit('message', { user: user.value, message: e.target.value });
});

socket.on('welcome', (data) => {
  console.log(data);
})

socket.on('messagelog', (data) => {
  let messages = data.map(message => {
    return `<div><p>${message.user} dice: ${message.message}</p></div>`;
  }).join('')
  log.innerHTML = messages
  console.log('LOG => ', data)
})
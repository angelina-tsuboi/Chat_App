var express = require('express');
var socket = require('socket.io');
const port = process.env.PORT || 3200;
var app = express();
var path = require('path');
app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/chat', (req, res) => {
    res.status(200).sendFile(__dirname + '/chat.html')
})


var server = app.listen(port, ()=> {
    console.log(`Server is up on ${port}`);
})

//Socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log("new User", socket.id);

    socket.on('chat-message', function(data) {
        io.sockets.emit('chat-message', data)
    })
})

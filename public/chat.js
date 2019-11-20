//Make connection
var socket = io.connect("localhost:3200");

//Query DOM
var sendButton = document.getElementById("msgButton");
var messageInput = document.getElementById("messageInput");
var output = document.getElementById("output");

//Emit events
sendButton.addEventListener("click", ()=> {
    socket.emit('chat-message', {
        message: messageInput.value
    })
})

//Listen for event
socket.on('chat-message', data => {
    output.innerHTML += '<div class="message"><p>' + data.message + '</p></div>';
    messageInput.value = '';
})
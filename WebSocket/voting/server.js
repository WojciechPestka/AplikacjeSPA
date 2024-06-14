const WebSocket = require('ws');
const express = require('express');
const http = require('http');

let results = {
    pizza: 0,
    pasta: 0
};

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server: server, path: "/voting" });
const clients = new Set();

app.use(express.static('client'));
server.listen(3000);

console.log("Server started");

wsServer.on('connection', (socket) => {
    console.log('Client connected!');
    socket.send(JSON.stringify(results));
    
    clients.add(socket);

    socket.on('message', (message) => {
        if (message == 'Pizza') {
            results.pizza++;
        } else if (message == 'Pasta') {
            results.pasta++;
        }
        console.log('Message received: ' + message);
        
        clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(results));
                console.log('Sending to a client from clients.');
            }
        });
    });

    socket.on('error', (error) => {
        console.log('Error:' + error);
    });

    socket.on('close', () => {
        clients.delete(socket);
        console.log('Client disconnected, total number of clients is: ', clients.size);
    });

    console.log('Sending to a newly connected client.');
});


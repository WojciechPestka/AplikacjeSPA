// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server });

// Lista przechowująca podłączonych klientów
const clients = new Set();

// Obsługa połączenia klienta WebSocket
wsServer.on('connection', (socket) => {
    console.log('Client connected!');

    // Dodanie klienta do listy podłączonych klientów
    clients.add(socket);

    // Obsługa wiadomości od klienta
    socket.on('message', (message) => {
        // Przekazanie otrzymanej wiadomości do wszystkich klientów
        clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString()); // Konwersja wiadomości na tekst
            }
        });
    });

    // Obsługa zdarzenia zamknięcia połączenia przez klienta
    socket.on('close', () => {
        clients.delete(socket);
        console.log('Client disconnected, total number of clients is: ', clients.size);
    });
});


// Serwowanie plików statycznych
app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

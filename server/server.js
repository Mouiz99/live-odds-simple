const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" }
});

const PORT = process.env.PORT || 3000;

// 🔥 DONNÉES SIMPLES (TEST)
function getMatches() {
    return [
        {
            id: 1,
            homeTeam: "Real Madrid",
            awayTeam: "Barcelona",
            homeOdd: (1.5 + Math.random()).toFixed(2),
            awayOdd: (1.5 + Math.random()).toFixed(2)
        }
    ];
}

io.on("connection", (socket) => {
    console.log("Client connecté");

    setInterval(() => {
        socket.emit("liveOdds", getMatches());
    }, 3000);
});

server.listen(PORT, () => {
    console.log("Serveur OK");
});

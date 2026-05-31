const socket = io();

const container = document.getElementById("matches");

socket.on("liveOdds", (matches) => {

    container.innerHTML = "";

    matches.forEach(m => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${m.homeTeam} vs ${m.awayTeam}</h3>
            <p>${m.homeOdd} - ${m.awayOdd}</p>
        `;

        container.appendChild(div);
    });

});

// server.js
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const CFX_ID = "loydpv"; // your server CFX ID

// Serve frontend
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API endpoint (JSON)
app.get("/api/players", async (req, res) => {
  try {
    const response = await axios.get(
      `https://servers-frontend.fivem.net/api/servers/single/${CFX_ID}`
    );

    const players = response.data.Data.players || [];
    res.json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch players" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

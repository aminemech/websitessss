// api/players.js
import axios from "axios";

const CFX_ID = "loydpv"; // replace with your server CFX ID

export default async function handler(req, res) {
  try {
    // Fetch live data from FiveM servers frontend API
    const response = await axios.get(
      `https://servers-frontend.fivem.net/api/servers/single/${CFX_ID}`
    );

    const players = response.data.Data.players || [];
    res.status(200).json(players); // send live players to frontend
  } catch (err) {
    console.error("Failed to fetch players:", err.message);
    res.status(500).json({ error: "Failed to fetch players" });
  }
}

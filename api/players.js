import fetch from "node-fetch"; // use node-fetch instead of axios

const CFX_ID = "loydpv"; // your server CFX ID

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://servers-frontend.fivem.net/api/servers/single/${CFX_ID}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const players = data.Data.players || [];

    res.status(200).json(players);
  } catch (err) {
    console.error("Failed to fetch players:", err.message);
    res.status(500).json({ error: "Failed to fetch players" });
  }
}

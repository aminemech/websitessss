// api/players.js
export default async function handler(req, res) {
  try {
    const response = await fetch("http://194.50.0.52:30120/players.json");
    const players = await response.json(); // real-time players

    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: "Failed to load players" });
  }
}

export default async function handler(req, res) {
  try {
    const CFX_ID = "loydpv";

    const response = await fetch(
      `https://servers-frontend.fivem.net/api/servers/single/${CFX_ID}`
    );

    const data = await response.json();
    const players = data.Data?.players || [];

    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch players" });
  }
}

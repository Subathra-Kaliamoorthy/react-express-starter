import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

// Optional: allow CORS if you want to hit the API from other origins.
// Not required when using Vite proxy for local dev.
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express 👋' });
});

// Example: proxy to an external (public) API
app.get('/api/jokes', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
    // You can shape/validate the data before sending to client
    res.json({ id: data.id, joke: data.value, url: data.url });
  } catch (err) {
    console.error('External API error:', err.message);
    res.status(502).json({ error: 'Failed to fetch external API' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

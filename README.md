# React + Node.js (Express) – Working Starter

This is a minimal full‑stack example: a **React (Vite)** front end talking to a **Node.js + Express** API.
It includes a proxy for clean `/api/*` calls during development and a couple of sample endpoints.

## Quick Start

### 1) Prerequisites
- Node.js 18+ recommended
- npm 9+

### 2) Install deps (both server and client)
```bash
cd react-express-starter
npm run install-all
```

### 3) Run both apps in dev mode (two processes, one command)
```bash
npm run dev
```

- API runs on **http://localhost:5000**
- React dev server runs on **http://localhost:5173**
- The React app calls the API via the **Vite proxy** (so you can use `/api/...` in fetch without CORS issues).

### 4) Try it
- Open `http://localhost:5173` in your browser.
- Click the buttons to call:
  - `GET /api/hello`
  - `GET /api/jokes`

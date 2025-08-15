import React, { useState } from 'react'

export default function App() {
  const [hello, setHello] = useState('')
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function callHello() {
    setError(''); setLoading(true)
    try {
      const res = await fetch('/api/hello')
      const data = await res.json()
      setHello(data.message)
    } catch (e) {
      setError('Failed to reach /api/hello')
    } finally { setLoading(false) }
  }

  async function callJokes() {
    setError(''); setLoading(true); setJoke('')
    try {
      const res = await fetch('/api/jokes')
      const data = await res.json()
      setJoke(data.joke || JSON.stringify(data))
    } catch (e) {
      setError('Failed to reach /api/jokes')
    } finally { setLoading(false) }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24, lineHeight: 1.5 }}>
      <h1>React ↔ Express Starter</h1>
      <p>This page calls the Express API via the <code>/api</code> proxy.</p>

      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        <button onClick={callHello} disabled={loading}>Call /api/hello</button>
        <button onClick={callJokes} disabled={loading}>Call /api/jokes</button>
      </div>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}

      {hello && (
        <div style={{ marginTop: 16, padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
          <strong>Response:</strong> {hello}
        </div>
      )}

      {joke && (
        <div style={{ marginTop: 16, padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
          <strong>Joke:</strong> {joke}
        </div>
      )}

      <hr style={{ margin: '24px 0' }} />
      <p>
        Tip: open your terminal to see <code>server</code> logs (Express) and the browser devtools console for network requests.
      </p>
    </div>
  )
}

import { useState } from 'react'

function CGP({ user, onSetCGP }) {
  const [input, setInput] = useState('')
  if (!user) return null
  return (
    <div>
      <h2>CGP (Cumulative Grade Point)</h2>
      <p>Your CGP: {user.cgp ?? 'N/A'}</p>
      <input
        placeholder="Enter CGP"
        value={input}
        onChange={e => setInput(e.target.value)}
        type="number"
        min="0"
        max="10"
        step="0.01"
      />
      <button onClick={() => onSetCGP(Number(input))}>Update CGP</button>
      <footer style={{ marginTop: '2em', textAlign: 'center', color: '#888' }}>
        &copy; 23071A05N0
      </footer>
    </div>
  )
}

export default CGP

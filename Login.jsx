import { useState } from 'react'

function Login({ onLogin }) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const handleLogin = () => {
    if (onLogin(identifier, password)) {
      setMessage('')
    } else {
      setMessage('Invalid credentials')
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username or Email" value={identifier} onChange={e => setIdentifier(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <div>{message}</div>
      <footer style={{ marginTop: '2em', textAlign: 'center', color: '#888' }}>
        &copy; 23071A05N0
      </footer>
    </div>
  )
}

export default Login

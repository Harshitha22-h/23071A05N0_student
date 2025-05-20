import { useState } from 'react'

function Register({ onRegister }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = () => {
    if (!username || !password || !dob || !email || !year || !branch || !rollNo) {
      setMessage('Please fill all fields')
      return
    }
    const success = onRegister({
      username,
      password,
      dob,
      email,
      year,
      branch,
      rollNo
    })
    setMessage(success ? 'Registration successful!' : 'User already exists')
  }

  return (
    <div>
      <h2>Student Registration</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <input placeholder="Date of Birth" type="date" value={dob} onChange={e => setDob(e.target.value)} /><br />
      <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Year of Study" value={year} onChange={e => setYear(e.target.value)} /><br />
      <input placeholder="Branch" value={branch} onChange={e => setBranch(e.target.value)} /><br />
      <input placeholder="Roll No." value={rollNo} onChange={e => setRollNo(e.target.value)} /><br />
      <button onClick={handleRegister}>Register</button>
      <div>{message}</div>
      <footer style={{ marginTop: '2em', textAlign: 'center', color: '#888' }}>
        &copy; 23071A05N0
      </footer>
    </div>
  )
}

export default Register

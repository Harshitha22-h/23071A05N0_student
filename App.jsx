import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import StudentDetails from './pages/StudentDetails'
import Scholarship from './pages/Scholarship'
import Payment from './pages/Payment'
import CGP from './pages/CGP'

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  const handleRegister = (userObj) => {
    if (users.find(u => u.username === userObj.username)) return false
    setUsers([
      ...users,
      {
        ...userObj,
        scholarship: false,
        paid: false,
        cgp: null
      }
    ])
    return true
  }

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) {
      setCurrentUser(user)
      return true
    }
    return false
  }

  const updateCurrentUser = updates => {
    setUsers(users =>
      users.map(u =>
        u.username === currentUser.username ? { ...u, ...updates } : u
      )
    )
    setCurrentUser(user => ({ ...user, ...updates }))
  }

  const handleApplyScholarship = () => {
    updateCurrentUser({ scholarship: true })
  }

  const handlePay = () => {
    updateCurrentUser({ paid: true })
  }

  const handleSetCGP = cgp => {
    updateCurrentUser({ cgp })
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/register">Register</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/details">Student Details</Link> |{' '}
        <Link to="/scholarship">Scholarship</Link> |{' '}
        <Link to="/payment">Payment</Link> |{' '}
        <Link to="/cgp">CGP</Link>
        {currentUser && (
          <>
            {' '}| <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Student Management System</h1>} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/details" element={currentUser ? <StudentDetails user={currentUser} /> : <Navigate to="/login" />} />
        <Route path="/scholarship" element={currentUser ? <Scholarship user={currentUser} onApply={handleApplyScholarship} /> : <Navigate to="/login" />} />
        <Route path="/payment" element={currentUser ? <Payment user={currentUser} onPay={handlePay} /> : <Navigate to="/login" />} />
        <Route path="/cgp" element={currentUser ? <CGP user={currentUser} onSetCGP={handleSetCGP} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App

import { useState } from 'react'

function Payment({ user, onPay }) {
  const [rollNo, setRollNo] = useState(user?.rollNo || '')
  const [mode, setMode] = useState('')
  const [message, setMessage] = useState('')

  const handlePay = () => {
    if (!rollNo || !mode) {
      setMessage('Please fill all fields')
      return
    }
    onPay()
    setMessage('Payment completed.')
  }

  if (!user) return null

  return (
    <div>
      <h2>Payment</h2>
      {user.paid ? (
        <p>Payment completed.</p>
      ) : (
        <form onSubmit={e => { e.preventDefault(); handlePay(); }}>
          <div>
            <input
              placeholder="Roll No."
              value={rollNo}
              onChange={e => setRollNo(e.target.value)}
            />
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="mode"
                value="netbanking"
                checked={mode === 'netbanking'}
                onChange={e => setMode(e.target.value)}
              />
              Netbanking
            </label>
            <label style={{ marginLeft: '1em' }}>
              <input
                type="radio"
                name="mode"
                value="upi"
                checked={mode === 'upi'}
                onChange={e => setMode(e.target.value)}
              />
              UPI
            </label>
          </div>
          <button type="submit">Proceed to Pay</button>
          <div>{message}</div>
        </form>
      )}
      <footer style={{ marginTop: '2em', textAlign: 'center', color: '#888' }}>
        &copy; 23071A05N0
      </footer>
    </div>
  )
}

export default Payment

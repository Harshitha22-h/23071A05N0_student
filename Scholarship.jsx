import { useState } from 'react'

function Scholarship({ user, onApply }) {
  const [name, setName] = useState(user?.username || '')
  const [rollNo, setRollNo] = useState(user?.rollNo || '')
  const [income, setIncome] = useState('')
  const [certificate, setCertificate] = useState(null)
  const [certificateName, setCertificateName] = useState('')
  const [applied, setApplied] = useState(user?.scholarship || false)
  const [message, setMessage] = useState('')

  const handleApply = () => {
    if (!name || !rollNo || !income || !certificate) {
      setMessage('Please fill all fields and upload certificate')
      return
    }
    onApply()
    setApplied(true)
    setMessage('Scholarship application submitted!')
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setCertificate(file)
    setCertificateName(file ? file.name : '')
  }

  if (!user) return null

  return (
    <div>
      <h2>Apply for Scholarship</h2>
      {applied ? (
        <p>You have already applied for a scholarship.</p>
      ) : (
        <form onSubmit={e => { e.preventDefault(); handleApply(); }}>
          <div>
            <input
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Roll No."
              value={rollNo}
              onChange={e => setRollNo(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Parents Income"
              value={income}
              onChange={e => setIncome(e.target.value)}
              type="number"
              min="0"
            />
          </div>
          <div>
            <label>
              Certificate:&nbsp;
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </label>
            {certificateName && <span> Uploaded: {certificateName}</span>}
          </div>
          <button type="submit">Apply</button>
          <div>{message}</div>
        </form>
      )}
      <footer style={{ marginTop: '2em', textAlign: 'center', color: '#888' }}>
        &copy; 23071A05N0
      </footer>
    </div>
  )
}

export default Scholarship

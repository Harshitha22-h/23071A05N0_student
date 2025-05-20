function StudentDetails({ user }) {
  if (!user) return null
  return (
    <div>
      <h2>Student Details</h2>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Scholarship Applied:</b> {user.scholarship ? 'Yes' : 'No'}</p>
      <p><b>Payment Status:</b> {user.paid ? 'Paid' : 'Pending'}</p>
      <p><b>CGP:</b> {user.cgp ?? 'N/A'}</p>
      <footer style={{ marginTop: '2em', textAlign: 'center', color: '#888' }}>
        &copy; 23071A05N0
      </footer>
    </div>
  )
}

export default StudentDetails

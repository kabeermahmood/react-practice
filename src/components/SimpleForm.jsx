import { useState } from 'react'
import './SimpleForm.css'

function SimpleForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [submittedData, setSubmittedData] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedData({ firstName, lastName, email })
  }

  return (
    <div className="simple-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="form-result">
          <h4>✅ Submitted Data</h4>
          <div className="result-row">
            <span className="result-label">Name:</span>
            <span>{submittedData.firstName} {submittedData.lastName}</span>
          </div>
          <div className="result-row">
            <span className="result-label">Email:</span>
            <span>{submittedData.email}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SimpleForm

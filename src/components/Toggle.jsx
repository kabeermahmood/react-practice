import { useState } from 'react'
import './Toggle.css'

function Toggle() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="toggle">
      <button
        className={`toggle-btn ${isVisible ? 'active' : ''}`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? '🙈 Hide Content' : '👀 Show Content'}
      </button>

      {isVisible && (
        <div className="toggle-content">
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
            This paragraph is conditionally rendered using <strong>useState</strong>!
          </p>
        </div>
      )}
    </div>
  )
}

export default Toggle

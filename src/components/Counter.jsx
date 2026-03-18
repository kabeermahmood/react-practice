import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="counter-btn decrement" onClick={() => setCount(count - 1)}>
          −
        </button>
        <button className="counter-btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="counter-btn increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter

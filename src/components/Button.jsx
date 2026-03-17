import './Button.css'

function Button({ label, color }) {
  return (
    <button className="custom-btn" style={{ backgroundColor: color }}>
      {label}
    </button>
  )
}

export default Button

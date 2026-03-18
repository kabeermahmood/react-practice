import { useState } from 'react'
import './ColorPicker.css'

const COLORS = [
  { name: 'Coral', value: '#e74c3c' },
  { name: 'Ocean', value: '#3498db' },
  { name: 'Mint', value: '#2ecc71' },
  { name: 'Sunset', value: '#f39c12' },
  { name: 'Lavender', value: '#9b59b6' },
]

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value)

  return (
    <div className="color-picker">
      <div
        className="color-preview"
        style={{ backgroundColor: selectedColor }}
      >
        <span className="color-preview-label">{selectedColor}</span>
      </div>

      <div className="color-buttons">
        {COLORS.map((color) => (
          <button
            key={color.value}
            className={`color-btn ${selectedColor === color.value ? 'selected' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => setSelectedColor(color.value)}
            title={color.name}
          >
            {selectedColor === color.value && <span className="checkmark">✓</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker

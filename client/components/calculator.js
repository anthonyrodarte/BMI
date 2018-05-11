import React from 'react'

export default function Calculator() {
  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Height</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Weight</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </div>
    </div>
  )
}

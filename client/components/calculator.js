import React from 'react'

export default function Calculator(props) {
  return (
    <div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={props.age}/>
      </div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Height</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={props.height} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">Weight</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={props.weight}/>
      </div>
      <button type="button" className="btn btn-secondary" onClick={props.submit}>Calculate</button>
    </div>
  )
}

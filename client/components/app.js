import React from 'react'
import Calculator from './calculator'
import Calculate from './calcuate'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator solve={Calculate} />
      </div>
    )
  }
}

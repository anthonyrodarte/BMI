import React from 'react'
import Calculator from './calculator'
import Calculate from './calculate'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: null,
      height: null,
      weight: null,
      bmi: null
    }
    this.updateAge = this.updateAge.bind(this)
    this.updateHeight = this.updateHeight.bind(this)
    this.updateWeight = this.updateWeight.bind(this)
    this.submit = this.submit.bind(this)

  }
  updateAge(event) {
    this.setState({
      age: event.target.value
    })
  }
  updateHeight(event) {
    this.setState({
      height: event.target.value
    })
  }
  updateWeight(event) {
    this.setState({
      weight: event.target.value
    })
  }
  submit() {
    console.log(Calculate(this.state.weight, this.state.height))
  }
  render() {
    return (
      <div className="w-50">
        <Calculator age={this.updateAge} height={this.updateHeight} weight={this.updateWeight} submit={this.submit} />
      </div>
    )
  }
}

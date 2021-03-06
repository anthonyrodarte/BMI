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
    const bmi = Calculate(this.state.weight, this.state.height)
    if (!bmi) {
      return null
    }
    else {
      this.setState({
        bmi: bmi
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"/>
          <div className="col text-center">
            <div className="w-50 mb-3">
              <Calculator age={this.updateAge} height={this.updateHeight} weight={this.updateWeight} submit={this.submit} />
              <div className="mt-3">
                {this.state.bmi}
              </div>
            </div>
          </div>
          <div className="col"/>
        </div>
      </div>
    )
  }
}

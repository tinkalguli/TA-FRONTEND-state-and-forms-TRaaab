import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0,
      step : 1
    }
  }
  handleIncreament = () => {
    this.setState({
      counter : this.state.counter + this.state.step
    })
  }
  handleDecreament = () => {
    this.setState({
      counter : this.state.counter - this.state.step
    })
  }
  handleReset = () => {
    this.setState({
      counter : 0
    })
  }
  handleStep = (event) => {
    this.setState({
      step : +event.target.value
    })
  }
  render() {
    return (
      <section className="container">
        <h1 className="counter">{this.state.counter}</h1>
        <div className="flex-between btn-wrapper">
          <button onClick={this.handleIncreament}>Increament</button>
          <button onClick={this.handleDecreament}>Decreament</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
        <label htmlFor="select" className="step-label">Select a step :</label>
        <select id="select" onChange={this.handleStep}>
          <option>Select Step</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </section>
    )
  }
}

export default App;
import { Component } from "react";
import data from "../data/data.json";
import Houses from "./Houses";
import People from "./People";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse : "",
      activePeople : "",
      result : "Result will be shown here"
    }
  }
  handleReset = () => {
    this.setState({
      activeHouse : "",
      activePeople : "",
      result : "Result will be shown here"
    })
  }
  handleResult = (activeHouse, activePeople) => {
    if(activeHouse && activePeople) {
      let isIncluded = data.find(house => house.name === activeHouse)
                      .people.includes(activePeople);
      this.setState({
        result : isIncluded ? "It's a match🥳" : "Sorry Try Again🙃"
      })
    }
  }
  handleActiveHouse = (house) => {
    this.setState({
      activeHouse : house
    });
    this.handleResult(house, this.state.activePeople);
  }
  handleActivePeople = (people) => {
    this.setState({
      activePeople : people
    });
    this.handleResult(this.state.activeHouse, people);
  }
  render() {
    return (
      <section className="container flex">
        <div className="col-70">
          <Houses
            clickFunction={this.handleActiveHouse}
            activeHouse={this.state.activeHouse}
          />
          <People
            clickFunction={this.handleActivePeople}
            activePeople={this.state.activePeople}
          />
          <button onClick={this.handleReset} className="reset-btn">Reset</button>
        </div>
        <div className="result-div">
          <h2 className="result">{this.state.result}</h2>
        </div>
      </section>
    )
  }
}

export default App;
import {Component} from "react";
import Cards from "./Cards";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "",
      fontSize : 40
    }
  }
  handleSlider = (event) => {
    this.setState({
      fontSize : +event.target.value
    })
  }
  handleTextInput = (event) => {
    this.setState({
      text : event.target.value
    })
  }
  render() {
    return (
      <>
        <header className="header">
          <div className="flex-between container">
            <label>
              Custom :
              <input className="text-input" onChange={this.handleTextInput} type="text" placeholder="Type something"/>
            </label>
            <label>
              {this.state.fontSize}px :
              <input className="slider" onChange={this.handleSlider} type="range" min="8" max="300" />
            </label>
          </div>
        </header>
        <Cards text={this.state.text} fontSize={this.state.fontSize} />
      </>
    )
  }
}

export default Header;
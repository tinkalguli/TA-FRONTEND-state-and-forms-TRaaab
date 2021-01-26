import {Component} from "react";
import Sidebar from "./Sidebar";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : false
    }
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        isVisible : !prevState.isVisible
      }
    })
  }
  render() {
    return (
      <main>
        <Sidebar isVisible={this.state.isVisible} />
        <h1>This is the main body</h1>
        <span
          onClick={this.handleClick}
          className="toogle-btn">
            <span className={
              this.state.isVisible ? "rotate" : ""
            }>➕️</span>
        </span>
      </main>
    )
  }
}

export default Body;
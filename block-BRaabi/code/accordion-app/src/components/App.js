import {Component} from "react";
import data from "../data/data.json";
import Question from "./Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion : ""
    }
  }
  handleClick = (questionTitle) => {
    this.setState({
      activeQuestion : questionTitle
    })
  }
  render() {
    return (
      <section className="container">
        {
          data.map((question, i) => {
            return (
              <Question
                key={i}
                activeQuestion = {this.state.activeQuestion}
                handleClick={() => this.handleClick(question.Q)}
                {...question}
              />
            )
          })
        }
      </section>
    )
  }
}

export default App;
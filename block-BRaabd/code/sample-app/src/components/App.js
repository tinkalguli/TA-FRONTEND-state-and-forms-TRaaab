import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl : "",
      imageAlt : ""
    }

    this.data = {
      busketball : "/assets/basketball.jpg",
      pubg : "/assets/pubg.jpeg",
      tiger : "/assets/tiger.jpg",
      phone : "/assets/phone.jpg",
      laptop : "/assets/laptop.jpg",
      cricket : "/assets/cricket.jpeg"
    }
  }

  handleClick = (event) => {
    this.setState({
      imageUrl : this.data[event.target.dataset.id],
      imageAlt : event.target.dataset.id
    });
  }

  Button = (props) => {
    return (
      <button
        data-id={props.btnName.toLowerCase()}
        onClick={this.handleClick}
      >{props.btnName}</button>
    )
  }

  render() {
    return (
      <section className="container">
        <h1>Click the buttons</h1>
        <div className="flex-between">
          <this.Button btnName="Busketball" />
          <this.Button btnName="Pubg" />
          <this.Button btnName="Tiger" />
          <this.Button btnName="Phone" />
          <this.Button btnName="Laptop" />
          <this.Button btnName="Cricket" />
        </div>
        <div className="image-div">
          <img src={this.state.imageUrl} alt={this.state.imageAlt} />
        </div>
      </section>
    )
  }
}

export default App;

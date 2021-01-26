import {Component} from "react";
import Cards from "./Cards";
import data from "../data/data.json";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink : "all"
    }
  }
  handleClick = (link) => {
    this.setState({
      activeLink : link
    })
  }
  render() {
    let items;
    if(this.state.activeLink === "all") {
      items = data;
    } else {
      items = data.filter(item => item.category === this.state.activeLink);
    }

    return (
      <>
        <ul className="navbar flex-between">
          <li
            className={this.state.activeLink === "all" ? "active" : ""}
            onClick={() => this.handleClick("all")}>All</li>
          <li
            className={this.state.activeLink === "breakfast" ? "active" : ""}
            onClick={() => this.handleClick("breakfast")}>Breakfast</li>
          <li
            className={this.state.activeLink === "lunch" ? "active" : ""}
            onClick={() => this.handleClick("lunch")}>Lunch</li>
          <li
            className={this.state.activeLink === "shakes" ? "active" : ""}
            onClick={() => this.handleClick("shakes")}>Shakes</li>
        </ul>
        <Cards items = {items} />
      </>
    )
  }
}

export default Links;
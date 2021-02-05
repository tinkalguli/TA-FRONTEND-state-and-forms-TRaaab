import {Component} from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm : 1
    }
  }
  handleClick = ({target}) => {
    const {dataset} = target.tagName === "SPAN"
      ? target.parentElement : target;

    this.setState({
      currentForm : +dataset.id
    })
  }
  next = () => {
    this.setState(({currentForm}) => ({
      currentForm : currentForm + 1
    }))
  }
  prev = () => {
    this.setState(({currentForm}) => ({
      currentForm : currentForm - 1
    }))
  }
  render() {
    let currentForm = this.state.currentForm;
    let imgArr = [
      "https://images.unsplash.com/photo-1534956454704-f151f87f6717?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1581766372231-6484887457b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVydGljbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1521137679240-5ff7701e13e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ];

    return (
      <section className="flex-between container">
        <div className="img-div">
          <img src={imgArr[currentForm - 1]} alt="sample" />
        </div>
        <div className="form-div">
          <ul className="flex-between tags">
            <li onClick={this.handleClick} data-id="1">
              <span className={currentForm === 1 ? "active" : ""}>
                1
              </span> Sign Up
            </li>
            <li onClick={this.handleClick} data-id="2">
              <span className={currentForm === 2 ? "active" : ""}>
                2
              </span> Message
            </li>
            <li onClick={this.handleClick} data-id="3">
              <span className={currentForm === 3 ? "active" : ""}>
                3
              </span> Checkbox
            </li>
          </ul>
          <FormOne currentForm={currentForm} next={this.next}/>
          <FormTwo currentForm={currentForm} prev={this.prev} next={this.next}/>
          <FormThree currentForm={currentForm} />
        </div>
      </section>
    )
  }
}
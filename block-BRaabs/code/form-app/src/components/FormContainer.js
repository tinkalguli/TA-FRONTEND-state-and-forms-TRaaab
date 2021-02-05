import { Component } from "react";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping : {
        address : "",
        postalCode : "",
        city : "",
        country : ""
      },
      billing : {
        address : "",
        postalCode : "",
        city : "",
        country : ""
      },
      error : "",
      isSame: false
    }
  }
  handleChange = ({ target }) => {
    let {name, value} = target;

    this.setState(({shipping}) => ({
      shipping : { ...shipping, [name] : value }
    }))

    this.setState(({shipping}) => ({
      error : shipping.address.length < 8
        ? "You need to enter at-least 8" : ""
    }))
  }
  handleCheck = () => {
      this.setState(({isSame}) => (
        {
          isSame : !isSame
        }
      ))
  }
  render() {
    let isSame = this.state.isSame;
    let billing = isSame ? this.state.shipping : this.state.billing;
    return (
      <section className="container">
        <h2>Controlled Component</h2>
        <div className="flex-between">
          <div className="form-div">
            <h3>Shipping Address</h3>
            <form>
              <label>Address</label>
              <input
                name="address"
                type="text"
                onChange={this.handleChange}
                value={this.state.shipping.address}
              />
              <span className={this.state.error ? "error" : ""}>{this.state.error}</span>
              <label>ZIP/Postal Code</label>
              <input
                name="postalCode"
                type="text"
                onChange={this.handleChange}
                value={this.state.shipping.postalCode}
              />
              <label>City</label>
              <input
                name="city"
                type="text"
                onChange={this.handleChange}
                value={this.state.shipping.city}
              />
              <label>Country</label>
              <input
                name="country"
                type="text"
                onChange={this.handleChange}
                value={this.state.shipping.country}
              />
            </form>
          </div>
          <div className="form-div">
            <h3>Billing Address</h3>
            <label>
              <input
                onChange={this.handleCheck}
                type="checkbox"
              />
              Same as the Shipping Address?
            </label>
            <form>
              <label>Address</label>
              <input
                type="text"
                value={billing.address}
              />
              <span className={this.state.error ? "error" : ""}>{this.state.error}</span>
              <label>ZIP/Postal Code</label>
              <input
                type="text"
                value={billing.postalCode}
              />
              <label>City</label>
              <input
                type="text"
                value={billing.city}
              />
              <label>Country</label>
              <input
                type="text"
                value={billing.country}
              />
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default FormContainer;
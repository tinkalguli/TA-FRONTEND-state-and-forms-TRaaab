import {Component} from "react";

class ValidationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      email : "",
      password : "",
      confirmPassword : "",
      errors : {
        username : "",
        email : "",
        password : "",
        confirmPassword : ""
      }
    }
  }
  validateUsername = (username) => {
    return username.length >= 3;
  }
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  }
  validatePassword = (password) => {
    return password.length >= 6;
  }
  validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === this.state.password;
  }
  handleChange = ({target}) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username = this.validateUsername(value) ? ""
         : !value ? "Username is required"
         : "Username must be atleast 3 characters";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? ""
          : !value ? "Email is required"
          : "Email is not valid";
        break;
      case "password":
        errors.password = this.validatePassword(value) ? ""
          : !value ? "Password is required"
          : "Password must be atleast 6 characters";
        break;
      case "confirmPassword":
        errors.confirmPassword = this.validateConfirmPassword(value) ? ""
          : !value ? "Confirm password is required"
          : "Password is not matching";
        break;
    }

    this.setState({
      [name] : value,
      errors : errors
    })
  }
  render() {
    let errors = this.state.errors;
    return (
      <form className="validation-form">
        <h2>Register With Us</h2>
        <label>Username</label>
        <input
          className={errors.username && "error"}
          onChange={this.handleChange}
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Enter Username" />
        {
          errors.username ? <span>{errors.username}</span> : ""
        }
        <label>Email</label>
        {/* In this I'm not using email type because I don't need html5 validation */}
        <input
          className={errors.email && "error"}
          onChange={this.handleChange}
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Enter Email" />
        {
          errors.email ? <span>{errors.email}</span> : ""
        }
        <label>Password</label>
        <input
          className={errors.password && "error"}
          onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Enter Password" />
        {
          errors.password ? <span>{errors.password}</span> : ""
        }
        <label>Confirm Password</label>
        <input
          className={errors.confirmPassword && "error"}
          onChange={this.handleChange}
          type="password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          placeholder="Enter Password again"/>
        {
          errors.confirmPassword ? <span>{errors.confirmPassword}</span> : ""
        }
      </form>
    )
  }
}

export default ValidationForm;
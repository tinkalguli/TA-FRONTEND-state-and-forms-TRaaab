import {Component} from "react";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default : false,
      success : false,
      error : false,
      warning : false,
      info : false
    }
  }
  handleClick = ({ target }) => {
    const { name } = target;

    this.setState((state) => ({
      [name] : !state[name]
    }))
  }
  render() {
    let defaultValue = this.state.default;
    let successValue = this.state.success;
    let errorValue = this.state.error;
    let warningValue = this.state.warning;
    let infoValue = this.state.info;
    return (
      <>
        <button
          className={defaultValue ? "active" : ""}
          name="default"
          onClick={this.handleClick}>
          {defaultValue ? "HIDE" : "SHOW"} DEFAULT
        </button>
        <button
          className={successValue ? "active" : ""}
          name="success"
          onClick={this.handleClick}>
          {successValue ? "HIDE" : "SHOW"} SUCCESS
        </button>
        <button
          className={errorValue ? "active" : ""}
          name="error"
          onClick={this.handleClick}>
          {errorValue ? "HIDE" : "SHOW"} ERROR
        </button>
        <button
          className={warningValue ? "active" : ""}
          name="warning"
          onClick={this.handleClick}>
          {warningValue ? "HIDE" : "SHOW"} WARNING
        </button>
        <button
          className={infoValue ? "active" : ""}
          name="info"
          onClick={this.handleClick}>
          {infoValue ? "HIDE" : "SHOW"} INFO
        </button>
        <div className="notifications">
            {
              defaultValue ? <span className="default">Default Notification</span> : ""
            }
            {
              successValue ? <span className="success">✅️ Success Notification</span> : ""
            }
            {
              errorValue ? <span className="error">❌️ Error Notification</span> : ""
            }
            {
              warningValue ? <span className="warning">⚠️ Warning Notification</span> : ""
            }
            {
              infoValue ? <span className="info">ℹ️ Info Notification</span> : ""
            }
        </div>
      </>
    )
  }
} 
import {Component} from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarVisible : false,
      isModalVisible : false
    }
  }
  sidebarHandleClick = () => {
    this.setState((prevState) => {
      return {
        isSidebarVisible : !prevState.isSidebarVisible
      }
    })
  }
  modalHandleClick = () => {
    this.setState((prevState) => {
      return {
        isModalVisible : !prevState.isModalVisible
      }
    })
  }
  render() {
    return (
      <main>
        <Sidebar
          sidebarHandleClick={this.sidebarHandleClick}
          isSidebarVisible={this.state.isSidebarVisible} />
        <button
          onClick={this.modalHandleClick}
          className="modal-open-btn">Show Modal</button>
        <Modal
          modalHandleClick={this.modalHandleClick}
          isModalVisible={this.state.isModalVisible}/>
        <span
          onClick={this.sidebarHandleClick}
          className="bar-btn">
            <span>➖️</span>
            <span>➖️</span>
            <span>➖️</span>
        </span>
      </main>
    )
  }
}

export default Body;
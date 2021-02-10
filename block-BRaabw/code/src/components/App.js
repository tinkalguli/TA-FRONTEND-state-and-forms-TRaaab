import React from "react";
import Tags from "./Tags";
import Cards from "./Cards";
import Cart from "./Cart";
import data from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSizes : [],
      activeOrder : "",
      isCartVisible : false,
      selectedItems : []
    }
  }
  tagsHandleChick = ({target}) => {
    this.setState(({activeSizes}) => {
      if(activeSizes.includes(target.innerText)) {
        activeSizes.splice(activeSizes.indexOf(target.innerText), 1);
        return {activeSizes : activeSizes};
      }
      return {activeSizes : activeSizes.concat([target.innerText])};
    })
  }
  onChange = ({target}) => {
    let {value} = target;

    this.setState({
      activeOrder : value
    })
  }
  handleUpdateLocalStorage = () => {
    localStorage
      .setItem("carts", JSON.stringify(this.state.selectedItems));
  }
  componentDidMount() {
    if(localStorage.carts) {
      this.setState({selectedItems : JSON.parse(localStorage.carts) || []})
    }
    window.addEventListener(
      "beforeunload",
      this.handleUpdateLocalStorage
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.handleUpdateLocalStorage
    );
  }
  toggleClickHandler = () => {
    this.setState(({isCartVisible}) => ({
      isCartVisible : !isCartVisible
    }))
  }
  addCartItem = (item) => {
    let allSelectedItems = [...this.state.selectedItems];
    let selectedItem = allSelectedItems
      .find(val => val.id === item.id);
    
    if(selectedItem) {
      selectedItem.count += 1;
      selectedItem.totalPrice = selectedItem.count * item.price;
      this.setState({
        selectedItems : allSelectedItems
      })
    } else {
      this.setState(({selectedItems}) => ({
        selectedItems : selectedItems.concat([
          {...item, count : 1, totalPrice : item.price}])
      }))
    }
    this.setState({
      isCartVisible : true
    })
  }
  removeCartItem = (item) => {
    let allSelectedItems = [...this.state.selectedItems];
    let filteredItems = allSelectedItems.filter(p => p.id !== item.id);
    this.setState({
      selectedItems : filteredItems
    })
  }
  decreaseItemCount = (item) => {
    let allSelectedItems = [...this.state.selectedItems];
    let selectedItem = allSelectedItems
      .find(val => val.id === item.id);
    
    selectedItem.count -= 1;
    selectedItem.totalPrice = selectedItem.count * item.price;
    this.setState({
      selectedItems : allSelectedItems
    })
  }
  render() {
    let activeSizes = this.state.activeSizes;
    let activeOrder = this.state.activeOrder;

    let selectedProducts = data.products.filter(item => {
      let allSizes = item.availableSizes.concat(activeSizes);
      let newSet = new Set(allSizes);
      return allSizes.length !== newSet.size;
    })

    let products = activeSizes.length ? selectedProducts : data.products;

    if(activeOrder) {
      products = activeOrder === "lowToHigh"
      ? [...products].sort((a, b) => a.price - b.price)
      : [...products].sort((a, b) => b.price - a.price)
    }

    return (
      <>
        <header>
          <Cart
            isCartVisible={this.state.isCartVisible}
            increaseItemCount={this.addCartItem}
            decreaseItemCount={this.decreaseItemCount}
            removeCartClick={this.removeCartItem}
            toggleClickHandler={this.toggleClickHandler}
            products={this.state.selectedItems}/>
        </header>
        <section className="container flex-wrap">
          <Tags
            handleClick={this.tagsHandleChick}
            activeSizes={activeSizes}/>
          <Cards
            handleClick={this.addCartItem}
            products={products}
            onChange={this.onChange}
            />
        </section>
      </>
    )
  }
}

export default App;
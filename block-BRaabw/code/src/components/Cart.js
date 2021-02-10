import React from "react";

export default function Cart(props) {
    const products = props.products;
    let totalCount = 0;
    let totalPrice = "0.00";
    let installments;
    if(products.length) {
      totalCount = products.map(item => item.count)
      .reduce((a, c) => a + c, 0);
  
      totalPrice = products.map(item => item.totalPrice)
        .reduce((a, c) => a + c, 0).toFixed(2);
      
      installments = products.map(item => item.installments)
        .sort((a, b) => b - a)[0];
    }

  return (
    <aside className={props.isCartVisible ? "cart" : "cart cart-disable"}>
      {
        props.isCartVisible
        ? <button
            onClick={props.toggleClickHandler}
            className="toggle-btn">
            <img src="/static/cancel.png" alt="cancel icon"/>
          </button>
        : <button
            onClick={props.toggleClickHandler}
            className="toggle-btn">
            <div className="bag-img-div">
              <img src="/static/bag-icon.png" alt="bag icon"/>
              <p className="total-count">{totalCount}</p>
            </div>
          </button>
      }
      <div className="flex-center cart-title">
        <div className="bag-img-div">
          <img className="cart-icon-inside" src="/static/bag-icon.png" alt="bag icon" />
          <p className="total-count">{totalCount}</p>
        </div>
        <h3>Cart</h3>
      </div>
      <ul className="cart-items">
        {
          !products.length
          ? <h4 className="no-item">Add some products in the cart :)</h4>
          : props.products.map(item => (
            <article key={item.id} className="cart-item flex-between">
              <section className="flex">
                <div className="cart-item-img-div">
                  <img src={`/static/products/${item.sku}_2.jpg`} alt="item" />
                </div>
                <div className="cart-item-info">
                  <h5>{item.title}</h5>
                  <p className="cart-item-installment">{item.availableSizes[0]} | {item.style}</p>
                  <p>Quantity: {item.count}</p>
                </div>
              </section>
              <section className="flex-between cart-item-btns">
                <button onClick={() => props.removeCartClick(item)}>x</button>
                <p className="cart-item-price">{item.currencyFormat} {item.price}</p>
                <div className="flex">
                  <button
                    id={item.count === 1 ? "disable-btn" : ""}
                    onClick={() => props.decreaseItemCount(item)}>-</button>
                  <button onClick={() => props.increaseItemCount(item)}>+</button>
                </div>
              </section>
            </article>
          ))
        }
      </ul>
      <div className="cart-total">
        <div className="tatal-amount-div flex-between">
          <p>SUB TOTAL</p>
          <h4 className="total-price">
            $ {totalPrice}
            {
              products.length 
              ? <p className="cart-total-installment">
                    OR UP TO {installments} x ${(totalPrice / installments).toFixed(2)}
                </p>
              : ""
            }
          </h4>
        </div>
        <button
          onClick={() => alert(`Checkout - Subtotal: $ ${totalPrice}`)}
          className="btn checkout-btn">CHECKOUT</button>
      </div>
    </aside>
  )
}
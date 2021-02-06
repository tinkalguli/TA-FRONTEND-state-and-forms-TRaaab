import React from "react";

export default function Cards(props) {
  return (
    <section className="card-sec">
      <div className="flex-between">
        <p>{props.products.length} Product(s) found</p>
        <label>
          Order by
          <select className="order" onChange={props.onChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Lowest to highest</option>
            <option value="highToLow">Highest to Lowest</option>
          </select>
        </label>
      </div>
      <div className="flex-wrap">
        {
          props.products.map(item => (
            <article onClick={() => props.handleClick(item)} key={item.id} className="card">
              <div className="img-div">
                <img src={`/static/products/${item.sku}_1.jpg`} alt="item" />
                {
                  item.isFreeShipping ? <span className="shipping-tag">Free shipping</span> : ""
                }
              </div>
              <h4 className="title">{item.title}</h4>
              <hr className="bar" />
              {
                item.price.toString().includes(".")
                ? <p className="price">
                    {item.currencyFormat} <span>{item.price.toString().split(".")[0]}</span>
                    .{item.price.toString().split(".")[1]}
                  </p>
                : <p className="price">
                    {item.currencyFormat} <span>{item.price}</span>
                  </p>
              }
              <p className="installment">
                {
                  !item.installments
                  ? ""
                  : <>
                      {`or ${item.installments} x`}
                      <span>
                        {item.currencyFormat}
                        {(item.price / item.installments).toFixed(2)}
                      </span>
                    </>
                }
              </p>
              <button className="btn">Add to cart</button>
            </article>
          ))
        }
      </div>
    </section>
  )
}
export default function Cards(props) {
  return (
    <section className="flex-between">
      {
        props.items.map(item => (
          <article key={item.id} className="card flex-between align-start">
            <div className="img-div">
              <img src="/images/item.jpg" alt={item.title}/>
            </div>
            <div className="item-info">
              <h3 className="item-heading flex-between">
                <span>{item.title}</span>
                <span className="price">${item.price}</span>
              </h3>
              <p className="description">
                {item.desc}
              </p>
            </div>
          </article>
        ))
      }
    </section>
  )
}
import data from "../data.json";

export default function Cards(props) {
  return (
    <section className="cards">
      <div className="container flex-between flex-stretch">
        {
          data.map(fontFamily => (
            <article className="card">
              <div className="font-main-info flex-between">
                <h3>{fontFamily.title}</h3>
                <p>
                  {
                    typeof fontFamily.style === "string"
                    ? fontFamily.style
                    : fontFamily.style > 1
                    ? `${fontFamily.style} styles`
                    : `${fontFamily.style} style`
                  }
                </p>
              </div>
              <p className="author">{fontFamily.author}</p>
              <p
                className="text"
                style={{fontSize : props.fontSize, fontFamily : fontFamily.font}}
              >{props.text}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}
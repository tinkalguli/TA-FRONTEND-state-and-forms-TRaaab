import data from "../data/data.json";

export default function Houses(props) {
    let houses = data.map(house => house.name);
    return (
        <section className="house-sec">
            <h2>Select One House</h2>
            {
                houses.map(house => {
                    return (
                        <button
                          className={
                            props.activeHouse === house ? "active" : ""
                          }
                          key={house}
                          onClick={() => props.clickFunction(house)}>
                          {house}
                        </button>
                    )
                })
            }
        </section>
    )
}
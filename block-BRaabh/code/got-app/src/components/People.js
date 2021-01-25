import data from "../data/data.json";

export default function Houses(props) {
    let allPeople = data.reduce((acc, cv) => acc.concat(cv.people), []);
    return (
        <section className="people-sec">
            <h2>Select One People</h2>
            {
                allPeople.map(people => {
                    return (
                        <div
                            key={people.name}
                            className={
                                props.activePeople.name === people.name
                                ? "people-img active-people"
                                : "people-img"
                            }
                        >
                            <img
                              src={people.image}
                              alt={people.description}
                              onClick={() => props.clickFunction(people)}
                            />
                        </div>
                    )
                })
            }
        </section>
    )
}
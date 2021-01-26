export default function Sidebar(props) {
  return(
    <section
      className={
        props.isVisible ? "sidebar visible" : "sidebar"
      }>
      <ul className="navbar">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </section>
  )
}
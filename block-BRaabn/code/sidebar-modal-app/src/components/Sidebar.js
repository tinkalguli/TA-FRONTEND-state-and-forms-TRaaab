export default function Sidebar(props) {
  return(
    <section
      className={
        props.isSidebarVisible ? "sidebar visible" : "sidebar"
      }>
      <div className="flex-between nav-heading">
        <h2>Coding <span className="blue">Addict</span></h2>
        <span onClick={props.sidebarHandleClick} className="cancel-btn">⚔️</span>
      </div>
      <ul className="navbar">
        <li><span>🏡</span>Home</li>
        <li><span>👥</span>Team</li>
        <li><span>📂</span>Projects</li>
        <li><span>📆</span>Calendar</li>
        <li><span>📄</span>Documents</li>
      </ul>
      <ul className="flex-between icon-nav">
        <li>📞</li>
        <li>📞</li>
        <li>📞</li>
      </ul>
    </section>
  )
}

export default function Modal(props) {
  return(
    <section className={
      props.isModalVisible ? "modal-wrapper scaled" : "modal-wrapper"
    }>
      <div
        className="modal">
        <button onClick={props.modalHandleClick} className="modal-cancel-btn">⚔️</button>
        <h2>No centent</h2>
      </div>
    </section>
  )
}

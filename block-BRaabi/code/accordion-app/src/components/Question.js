export default function Question(props) {
  return (
    <div>
      <h2 className={
        props.activeQuestion === props.Q ? "question active flex-between" : "question flex-between"
      }
      onClick={props.handleClick}>
        <span>{props.Q}</span>
        {
          props.activeQuestion === props.Q
          ? <span>👆</span>
          : <span>👇</span>
        }
      </h2>
      <p className={
        props.activeQuestion === props.Q ? "answer display" : "answer"
      }>{props.A}</p>
    </div>
  )
}
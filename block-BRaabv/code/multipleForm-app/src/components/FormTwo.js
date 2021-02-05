export default function FormTwo(props) {
  if (props.currentForm !== 2) {
    return null;
  }

  return (
    <div>
      <p>Step 2/3</p>
      <h2 className="heading">Message</h2>
      <form className="form-two">
        <label className="label">Message</label>
        <textarea rows={7}></textarea><br/>
        <label className="checkbox-label"><input type="checkbox" />The number one choice</label>
        <label className="checkbox-label margin-left"><input type="checkbox" />The number one choice</label>
        <div className="btn-div">
          <button className="btn back" onClick={props.prev}>Back</button>
          <button className="btn" onClick={props.next}>Next Step</button>
        </div>
      </form>
    </div>
  )
}
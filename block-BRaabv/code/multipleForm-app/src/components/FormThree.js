export default function FormThree(props) {
  if (props.currentForm !== 3) {
    return null;
  }

  return (
    <div>
      <p>Step 3/3</p>
      <h2 className="heading">Checkbox</h2>
      <form className="form-three">
        <div className="flex-between">
          <input type="radio" name="gender" id="girl" className="display-0" />
          <label className="chekbox-img girl-img" htmlFor="girl">
            👧
          </label>
          <input type="radio" name="gender" id="boy" className="display-0" />
          <label htmlFor="boy" className="chekbox-img boy-img">
            👦
          </label>
        </div>
        <label className="checkbox-label">
          <input type="checkbox" />I want to add this option</label>
        <label className="checkbox-label">
          <input type="checkbox" />Let me click on this checkbox and choose some cool stuff</label>
        <div className="btn-div">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}
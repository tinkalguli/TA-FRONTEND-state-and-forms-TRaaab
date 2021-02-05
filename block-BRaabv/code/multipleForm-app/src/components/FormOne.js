export default function FormOne(props) {
  if (props.currentForm !== 1) {
    return null;
  }

  return (
    <div>
      <p>Step 1/3</p>
      <h2 className="heading">Sign Up</h2>
      <form className="form-one">
        <div className="flex-between">
          <div className="input-div-50">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="input-div-50">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="flex-between">
          <div className="input-div-50 input-div">
            <label>Date Of Birth</label>
            <input type="date" />
          </div>
          <div className="input-div-50 input-div">
            <label>Email Address</label>
            <input type="email" />
          </div>
        </div>
        <div className="input-div">
            <label>Address</label>
            <input type="text" />
        </div>
        <div className="btn-div">
            <button className="btn" onClick={props.next}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
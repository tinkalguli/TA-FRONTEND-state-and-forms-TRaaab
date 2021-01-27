export default function FormInputs() {
  return (
    <form className="form-inputs">
      <label>Text Input</label>
      <input type="text" />
      <label>Date Input</label>
      <input type="date" />
      <label>File Input</label>
      <input type="file" />
      <label>Read-Only Input</label>
      <input type="text" readOnly />
      <label>Disabled Input</label>
      <input type="text" disabled />
      <label>Textarea</label>
      <textarea></textarea>
      <label>Textarea Disabled</label>
      <textarea className="disabled-textarea" disabled></textarea>
    </form>
  )
}
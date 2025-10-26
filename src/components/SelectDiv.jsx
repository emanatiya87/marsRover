export default function SelectDiv({ saveValue, title }) {
  return (
    <>
      <div className="mb-6">
        <label htmlFor={title} className="labelStyle">
          {title}:
        </label>
        <select className="inputStyle" name="" id={title} onChange={saveValue}>
          <option value="" hidden selected>
            Choose
          </option>
          <option value="0">nourth</option>
          <option value="1">east</option>
          <option value="2">south</option>
          <option value="3">west</option>
        </select>
      </div>
    </>
  );
}

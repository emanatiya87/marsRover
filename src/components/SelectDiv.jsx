import React from "react";
function SelectDiv({ saveValue, title, id }) {
  return (
    <>
      <div className="mb-6">
        <label htmlFor={id} className="labelStyle">
          {title}:
        </label>
        <select
          className="inputStyle"
          name="Directions"
          id={id}
          onChange={saveValue}
        >
          <option defaultValue hidden>
            Choose
          </option>
          <option value={0}>nourth</option>
          <option value={1}>east</option>
          <option value={2}>south</option>
          <option value={3}>west</option>
        </select>
      </div>
    </>
  );
}
export default React.memo(SelectDiv);

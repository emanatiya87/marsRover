import React from "react";
function InputDiv({ saveValue, title, placeholder, type, id }) {
  return (
    <>
      <div className="mb-6">
        <label htmlFor={id} className="labelStyle">
          {title}:
        </label>
        <input
          id={id}
          type={type}
          onChange={saveValue}
          placeholder={placeholder}
          className="inputStyle"
        />
      </div>
    </>
  );
}
export default React.memo(InputDiv);

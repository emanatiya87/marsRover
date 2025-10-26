export default function InputDiv({ saveValue, title, placeholder }) {
  return (
    <>
      <div className="mb-6">
        <label htmlFor={title} className="labelStyle">
          {title}:
        </label>
        <input
          id={title}
          type="text"
          onChange={saveValue}
          placeholder={placeholder}
          className="inputStyle"
        />
      </div>
    </>
  );
}

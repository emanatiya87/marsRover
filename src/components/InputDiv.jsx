export default function InputDiv({ saveValue, title, placeholder, type }) {
  return (
    <>
      <div className="mb-6">
        <label htmlFor={title} className="labelStyle">
          {title}:
        </label>
        <input
          id={title}
          type={type}
          onChange={saveValue}
          placeholder={placeholder}
          className="inputStyle"
        />
      </div>
    </>
  );
}

/* eslint-disable react/prop-types */
export default function ServiceSelect({
  text,
  serviceValue,
  onChangeServiceValue,
  options,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <label htmlFor={text}>{text}</label>
      <select
        id={text}
        value={serviceValue}
        onChange={(e) => onChangeServiceValue(e.target.value)}
      >
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </div>
  );
}

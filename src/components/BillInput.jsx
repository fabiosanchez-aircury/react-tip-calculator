/* eslint-disable react/prop-types */
export default function BillInput({ text, bill, onChangeBill }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <label htmlFor="bill">{text}</label>
      <input
        id="bill"
        type="number"
        value={bill}
        onChange={(e) => onChangeBill(e.target.value)}
      />
    </div>
  );
}

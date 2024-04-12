/* eslint-disable react/prop-types */
export default function TotalToPay({ total, bill, tips }) {
  return (
    <div>
      <p>
        You pay ${total} (${bill} + ${tips} tip)
      </p>
    </div>
  );
}

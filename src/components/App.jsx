import { useState } from "react";
import BillInput from "./BillInput";
import ServiceSelect from "./ServiceSelect";
import TotalToPay from "./TotalToPay";
import ResetButton from "./ResetButton";

const serviceOptions = [
  { text: "Dissatisfied (0%)", value: 0 },
  { text: "It was okey (5%)", value: 5 },
  { text: "It was good (10%)", value: 10 },
  { text: "Absolutely amazing! (20%)", value: 20 },
];

function App() {
  const [bill, setBill] = useState(0);
  const [serviceValue, setServiceValue] = useState(0);
  const [friendServiceValue, setFriendServiceValue] = useState(0);

  const serviceAverage = (serviceValue + friendServiceValue) / 2;
  const totalToPay =
    serviceAverage > 0 ? bill + (bill * serviceAverage) / 100 : bill;

  function handleOnChangeBill(value) {
    if (value >= 0) setBill(Number(value));
  }

  function handleOnChangeServiceValue(value) {
    setServiceValue(Number(value));
  }

  function handleOnChangeFriendServiceValue(value) {
    setFriendServiceValue(Number(value));
  }

  function handleCleanForm() {
    setBill(0);
    setServiceValue(0);
    setFriendServiceValue(0);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <BillInput
        text="How much was the bill"
        bill={bill}
        onChangeBill={handleOnChangeBill}
      />
      <ServiceSelect
        text="How did you like the service?"
        serviceValue={serviceValue}
        onChangeServiceValue={handleOnChangeServiceValue}
        options={serviceOptions}
      />
      <ServiceSelect
        text="How did your friend like the service?"
        serviceValue={friendServiceValue}
        onChangeServiceValue={handleOnChangeFriendServiceValue}
        options={serviceOptions}
      />
      {bill > 0 && (
        <>
          <TotalToPay total={totalToPay} bill={bill} tips={serviceAverage} />
          <ResetButton cleanForm={handleCleanForm} />
        </>
      )}
    </div>
  );
}

export default App;

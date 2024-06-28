import { useState } from "react";
import Bill from "./Components/Bill";
import FriendOpinon from "./Components/FriendOpinon";
import MyOpinon from "./Components/MyOpinon";
import Opinon from "./Components/Opinon";
import Total from "./Components/Total";

function App() {
  var totalTip = 0;
  var totalBill;
  var totalTipAmount;

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

  console.log("bill", bill);
  console.log("tip", tip);

  function handleBill(billCost) {
    setBill(billCost);
  }

  function handleTip(tip) {
    setTip((t) => t + tip);
  }

  calculateTotal();

  function calculateTotal() {
    if (tip) {
      totalTip = tip / 2;
    }

    totalBill = bill + bill * (totalTip / 100);

    totalTipAmount = bill * (totalTip / 100);
  }

  return (
    <div>
      <Bill onSetBill={handleBill}></Bill>
      <Opinon
        labelText={"How did you like the service ?"}
        onSetTip={handleTip}
      ></Opinon>
      <Opinon
        onSetTip={handleTip}
        labelText={"How did your friend like the service ?"}
      ></Opinon>

      <Total
        totalBill={totalBill}
        bill={bill}
        totalTipAmount={totalTipAmount}
      ></Total>
    </div>
  );
}

export default App;

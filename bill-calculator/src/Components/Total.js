export default function Total({ totalBill, totalTipAmount, bill }) {
  return (
    <div>
      <p> {`You pay $${totalBill} ($${bill} + $${totalTipAmount} Tip )`} </p>
    </div>
  );
}

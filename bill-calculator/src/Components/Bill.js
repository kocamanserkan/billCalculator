export default function Bill({ onSetBill }) {
  function handleBill(e) {
    onSetBill(Number(e.target.value));
  }

  return (
    <div>
      <label htmlFor="txtBill"> How much was the bill ? </label>
      <input id="txtBill" type="text" onChange={handleBill} />
    </div>
  );
}

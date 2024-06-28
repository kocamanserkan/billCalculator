export default function Opinon({ labelText, onSetTip }) {
  function handleTipChange(e) {
    onSetTip(Number(e.target.value));
  }

  return (
    <div>
      <label htmlFor="ddOpinon">{labelText} </label>
      <select name="" id="ddOpinon" onChange={handleTipChange}>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was Ok 5% Tip</option>
        <option value="10">It was Good 10% Tip</option>
        <option value="20">It was awesome 20% Tip</option>
      </select>
    </div>
  );
}

export default function MyOpinon() {
  return (
    <div>
      <label htmlFor="ddMyOpinon">
        How did your friend like the service ?{" "}
      </label>
      <select name="" id="ddMyOpinon">
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was Ok 5% Tip</option>
        <option value="10">It was Good 10% Tip</option>
        <option value="20">It was awesome 20% Tip</option>
      </select>
    </div>
  );
}

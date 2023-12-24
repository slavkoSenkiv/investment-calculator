export default function InputField({ labelText, defNum, step }) {
  return (
    <div>
      <label>{labelText}</label>
      <input type="number" defaultValue={defNum} step={step} min="0"></input>
    </div>
  );
}

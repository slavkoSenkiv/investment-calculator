export default function InputField({ labelText, step, handleInputChange, name, objectData }) {
  return (
    <div>
      <label>{labelText}</label>
      <input 
        type="number" 
        step={step}
        onChange={handleInputChange}
        name={name}
        defaultValue={objectData[name]}
        min="0">
      </input>
    </div>
  );
}

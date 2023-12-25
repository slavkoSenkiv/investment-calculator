export default function InputField({ labelText, step, handlePropertyUpdate, name, userInput }) {

  return (
    <div>
      <label>{labelText}</label>
      <input 
        type="number" 
        name={name}
        defaultValue={userInput[name]}
        onChange={(event) => handlePropertyUpdate(name, event.target.value)}
        step={step}
        min="0"
        required>
      </input>
    </div>
  );
}

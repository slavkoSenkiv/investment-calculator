import InputField from "./InputField";

export default function InputZone() {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField labelText={"Initial Investment"} defNum={10000} step={5000} />
        <InputField labelText={"Annual Investment"} defNum={300} step={100} />
      </div>
      <div className="input-group">
        <InputField labelText={"Expected Return"} defNum={5.5} step={0.5} />
        <InputField labelText={"Duration"} defNum={12} step={2} />
      </div>
    </div>
  );
}

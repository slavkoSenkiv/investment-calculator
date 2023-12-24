import InputField from "./InputField";

export default function InputZone( { handlePropertyUpdate, objectData }) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    handlePropertyUpdate(name, value);
  }

  return (
    <div id="user-input">

      <div className="input-group">

        <InputField 
          labelText={"Initial Investment"} 
          name={"initialInvestment"} 
          objectData={objectData}
          handleInputChange={handleInputChange}
          step={5000} />

        <InputField 
          labelText={"Annual Investment"} 
          name={"annualInvestment"} 
          objectData={objectData}
          handleInputChange={handleInputChange}
          step={100} />

      </div>

      <div className="input-group">

        <InputField 
          labelText={"Expected Return"} 
          name={"expectedReturn"}
          objectData={objectData}
          handleInputChange={handleInputChange}
          step={0.5} />

        <InputField 
          labelText={"Duration"} 
          name={"duration"} 
          objectData={objectData}
          handleInputChange={handleInputChange}
          step={2} />
      </div>

    </div>
  );
}

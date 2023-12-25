import InputField from "./InputField";

export default function InputZone( { handlePropertyUpdate, userInput }) {

  return (
    <div id="user-input">

      <div className="input-group">

        <InputField 
          labelText={"Initial Investment"} 
          name={"initialInvestment"} 
          userInput={userInput}
          handlePropertyUpdate={handlePropertyUpdate}
          step={5000} />

        <InputField 
          labelText={"Annual Investment"} 
          name={"annualInvestment"} 
          userInput={userInput}
          handlePropertyUpdate={handlePropertyUpdate}
          step={100} />

      </div>

      <div className="input-group">

        <InputField 
          labelText={"Expected Return"} 
          name={"expectedReturn"}
          userInput={userInput}
          handlePropertyUpdate={handlePropertyUpdate}
          step={0.5} />

        <InputField 
          labelText={"Duration"} 
          name={"duration"} 
          userInput={userInput}
          handlePropertyUpdate={handlePropertyUpdate}
          step={2} />
      </div>

    </div>
  );
}

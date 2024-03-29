import InputZone from "./components/InputZone";
import ForecTable from "./components/ForecTable";
import { useState } from "react";


const defaultInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(defaultInput);

  const inputIsValid = userInput.duration >= 1;

  function handlePropertyUpdate(propertyName, value) {

    setUserInput((previousInput) => {
      return { ...previousInput, [propertyName]: +value };
    });
  }

  return (
    <>
      <InputZone
        handlePropertyUpdate={handlePropertyUpdate}
        userInput={userInput}
      />
      { !inputIsValid && <p>Please enter duration more than 0 </p> }
      { inputIsValid && <ForecTable userInput={userInput} /> }
    </>
  );
}

export default App;

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

      <ForecTable userInput={userInput} />
    </>
  );
}

export default App;

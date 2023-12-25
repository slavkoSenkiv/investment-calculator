import InputZone from "./components/InputZone";
import ForecTable from "./components/ForecTable";
import { useState } from "react";

import { calculateInvestmentResults } from "./util/investment";

const defaultInput = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 4,
};

function App() {
  const [userInput, setUserInput] = useState(defaultInput);

  function handlePropertyUpdate(propertyName, value) {
    setUserInput((previousInput) => {
      return { ...previousInput, [propertyName]: value };
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

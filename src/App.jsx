import InputZone from "./components/InputZone";
import ForecTable from "./components/ForecTable";
import { useState } from "react";

import { calculateInvestmentResults } from "./util/investment";

const defObjData = {
  initialInvestment: 11111,
  annualInvestment: 222,
  expectedReturn: 3.3,
  duration: 4,
};

const defForec = calculateInvestmentResults(
  defObjData["initialInvestment"],
  defObjData["annualInvestment"],
  defObjData["expectedReturn"],
  defObjData["duration"]
);

function App() {
  const [objectData, setObjectData] = useState(defObjData);
  const [annualData, setAnnualData] = useState(defForec);

  function handlePropertyUpdate(propertyName, value) {
    setObjectData((prevObject) => ({
      ...prevObject,
      [propertyName]: value,
    }));

    setAnnualData(() => {
      return calculateInvestmentResults({
        initialInvestment: objectData["initialInvestment"],
        annualInvestment: objectData["annualInvestment"],
        expectedReturn: objectData["expectedReturn"],
        duration: objectData["duration"],
      });
    });

    console.log(annualData);
  }

  return (
    <>
      <InputZone
        handlePropertyUpdate={handlePropertyUpdate}
        objectData={objectData}
      />

      <ForecTable />
    </>
  );
}

export default App;

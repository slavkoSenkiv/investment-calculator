import InputZone from "./components/InputZone";
import ForecTable from "./components/ForecTable";
import { useState } from "react";

const defObjData = {
  initialInvestment: 11111,
  annualInvestment: 222,
  expectedReturn: 3.3,
  duration: 4,
};

function App() {
  const [objectData, setObjectData] = useState(defObjData);
  function handlePropertyUpdate(propertyName, value) {
    setObjectData((prevObject) => ({
      ...prevObject,
      [propertyName]: value,
    }));
  }

  return (
    <>
      <InputZone handlePropertyUpdate={handlePropertyUpdate} objectData={objectData}/>

      <ForecTable />
    </>
  );
}

export default App;

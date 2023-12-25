import ForecRow from "./ForecRow";
import { useState } from "react";

export default function ForecTable({ userInput }) {

  console.log(userInput);

  const [annualData, setAnnualData] = useState(calculateInvestmentResults(userInput));

  /* ???? */
/*   function handleSetAnnualData(){
    setAnnualData((prevAnnualData) => {
      return calculateInvestmentResults({
        ...prevAnnualData,
        [propertyName]: value,
      });
    });
  } */

  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Investment capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearObj, index) => (
          <ForecRow key={index} rowData={yearObj} />
        ))}
      </tbody>
    </table>
  );
}

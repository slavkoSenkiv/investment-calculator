import ForecRow from "./ForecRow";
/* import { useState } from "react";
 */import { calculateInvestmentResults } from "../util/investment";

export default function ForecTable({ userInput }) {

/*   const [resultsData, setresultsData] = useState(calculateInvestmentResults(userInput));
 */  
const resultsData = calculateInvestmentResults(userInput);

  console.log("userInput", userInput);
  console.log("resultsData", resultsData);

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
        {resultsData.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          return <ForecRow key={yearData.year} yearData={yearData} totalInterest={totalInterest} />
        })}
      </tbody>
    </table>
  );
}

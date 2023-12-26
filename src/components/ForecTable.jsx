import ForecRow from "./ForecRow";
import { calculateInvestmentResults } from "../util/investment";

export default function ForecTable({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

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
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <ForecRow
              key={yearData.year}
              yearData={yearData}
              totalInterest={totalInterest}
              totalAmountInvested={totalAmountInvested}
            />
          );
        })}
      </tbody>
    </table>
  );
}

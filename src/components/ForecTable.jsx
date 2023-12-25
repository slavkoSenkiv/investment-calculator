import ForecRow from "./ForecRow";

export default function ForecTable({ annualData }) {
  return (
    <table id="result">
      <thead className="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearObj, index) => (
          <ForecRow
            key={index}
            index={index}
            rowData={yearObj}
            prevInterest={index === 0 ? 0 : annualData[index-1].interest}
          />
        ))}
      </tbody>
    </table>
  );
}

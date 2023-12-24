import ForecRow from "./ForecRow"

export default function ForecTable () {
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
          <ForecRow />
          <ForecRow />
          <ForecRow />
        </tbody>
      </table>
  )
}
import { formatter } from "../util/investment"
export default function ForecRow ( { rowData, prevInterest} ) {
  return (
    <tr>
      <td>{rowData.year}</td>
      <td>{formatter.format(rowData.annualInvestment)}</td>
      <td>{formatter.format(rowData.interest)}</td>
      <td>{formatter.format(rowData.interest + prevInterest)}</td>
      <td>{formatter.format(rowData.valueEndOfYear)}</td>
    </tr>
  )
}
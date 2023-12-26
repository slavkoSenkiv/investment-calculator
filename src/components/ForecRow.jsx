import { formatter } from "../util/investment"
export default function ForecRow ( { yearData, totalInterest, totalAmountInvested} ) {
  return (
    <tr>
      <td>{yearData.year}</td> 
      <td>{formatter.format(yearData.annualInvestment)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  )
}
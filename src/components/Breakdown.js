import {
  EuiBasicTable,
  EuiIcon,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";
import React from "react";
import { currencyFormatter, percentage } from "./Utilities.js";

function Breakdown(props) {
  let remainingIncome = props.income;

  const yourBreakdown = props.filingStatus.brackets.reduce((acc, bracket) => {
    if (remainingIncome > 0) {
      const yourAmountInBracket =
        remainingIncome >= bracket.amountInRange
          ? bracket.amountInRange
          : remainingIncome;

      const remainder =
        remainingIncome <= bracket.amountInRange &&
        bracket.amountInRange !== Infinity
          ? remainingIncome - bracket.amountInRange
          : undefined;

      const amountInRange =
        bracket.amountInRange !== Infinity
          ? bracket.amountInRange
          : remainingIncome;

      acc.push({
        ...bracket,
        yourAmountInBracket,
        amountInRange,
        remainder,
        yourTaxOnThis: yourAmountInBracket * (bracket.rate / 100),
        percentOfYourIncomeInThisBracket: percentage(
          (yourAmountInBracket / props.income) * 100
        ),
      });

      remainingIncome = Math.max(0, remainingIncome - bracket.amountInRange);
    }

    return acc;
  }, []);

  const columns = [
    {
      field: "rate",
      name: "Rate",
      render: (rate) => percentage(rate),
      width: "100px",
    },
    {
      field: "range",
      name: "Range",
      width: "200px",
    },
    {
      field: "yourAmountInBracket",
      name: "How Much Income You Have In This Bracket",
      render: (yourAmountInBracket, item) => {
        const value = currencyFormatter.format(yourAmountInBracket);
        return item.remainder ? (
          <>
            <EuiToolTip
              content={`You could make ${currencyFormatter.format(
                Math.abs(item.remainder)
              )} more before moving into another bracket`}
            >
              <>
                {value}
                {"   "}
                <EuiIcon type="stats" title="test" />
              </>
            </EuiToolTip>
          </>
        ) : (
          <>{value}</>
        );
      },
    },
    {
      field: "yourTaxOnThis",
      name: "How Much Tax You're Paying On That Income",
      render: (yourTaxOnThis) => currencyFormatter.format(yourTaxOnThis),
    },
    {
      field: "percentOfYourIncomeInThisBracket",
      name: "How Much Of Your Total AGI Falls In This Bracket ",
    },
  ];

  return (
    <div>
      <EuiPanel>
        <EuiTitle>
          <h1>Your taxable income by bracket</h1>
        </EuiTitle>
        <EuiSpacer />
        <EuiText>Your AGI (Adjusted Gross Income)</EuiText>
        <EuiText>{currencyFormatter.format(props.income)}</EuiText>
        <EuiSpacer />
        <EuiBasicTable columns={columns} items={yourBreakdown} />
      </EuiPanel>
      {/* <Chart /> I might add a chart of this at some point TBD*/}
    </div>
  );
}

export default Breakdown;

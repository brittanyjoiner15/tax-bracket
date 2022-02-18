import { EuiBasicTable, EuiPanel, EuiSpacer, EuiTitle } from "@elastic/eui";
import React from "react";
import { currencyFormatter, percentage } from "./Utilities.js";

function BracketRates(props) {
  const columns = [
    {
      field: "rate",
      name: "Rate",
      render: (rate) => percentage(rate),
    },
    {
      field: "range",
      name: "Range",
    },
    {
      field: "amountInRange",
      name: "Amount in Range",
      render: (amountInRange) => currencyFormatter.format(amountInRange),
    },
  ];

  const items = props.filingStatus.brackets;

  return (
    <div>
      <EuiSpacer />
      <EuiPanel paddingSize="l" color="primary">
        <EuiTitle>
          <h1>
            Here's the 2021-2022 Tax Brackets and Federal Income Tax Rates
          </h1>
        </EuiTitle>

        <EuiSpacer />
        <EuiBasicTable columns={columns} items={items} responsive />
      </EuiPanel>
    </div>
  );
}

export default BracketRates;

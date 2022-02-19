import { EuiLink, EuiPanel, EuiSpacer, EuiText, EuiTitle } from "@elastic/eui";
import React from "react";

function Header() {
  return (
    <EuiPanel>
      <EuiTitle>
        <h1>Don't understand how marginal taxes work?</h1>
      </EuiTitle>
      <EuiSpacer />
      <EuiPanel>
        <EuiText size="m">
          In short, you don't pay one tax percentage on all your income. You pay
          different amounts based on groups of income. So even if you're making
          $300,000 ... you're not paying 35% of $300,000. You pay 10% on your
          first $10k, and then 12% on the next $30kish, and so on.
        </EuiText>
        <EuiSpacer />
        <EuiLink
          external
          href="https://www.investopedia.com/ask/answers/05/marginaltaxrate.asp#:~:text=The%20marginal%20tax%20rate%20is,retained%20on%20previously%20earned%20dollars."
        >
          Here's an explanation
        </EuiLink>
        <EuiSpacer />
        <EuiText size="m">
          Want to see which brackets your income lands in? Try out this handy
          calculator! Just type in your adjusted gross income (income minus
          deductions) and your filing status.
        </EuiText>

        <EuiSpacer />
      </EuiPanel>
    </EuiPanel>
  );
}

export default Header;

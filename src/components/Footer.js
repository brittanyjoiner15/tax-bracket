import { EuiControlBar, EuiLink } from "@elastic/eui";
import React from "react";

function Footer() {
  const controls = [
    {
      controlType: "text",
      id: "builtWith",
      text: "Built with create-react-app and Eui",
    },

    {
      controlType: "spacer",
    },
    {
      controlType: "icon",
      id: "github_icon",
      iconType: "logoGithub",
      "aria-label": "Github",
    },
    {
      controlType: "text",
      id: "github_text",
      text: (
        <EuiLink
          href="https://github.com/brittanyjoiner15/tax-bracket"
          target="_blank"
        >
          View the source code
        </EuiLink>
      ),
    },
  ];
  return (
    <div>
      <EuiControlBar controls={controls} showOnMobile />;
    </div>
  );
}

export default Footer;

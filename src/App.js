// import { currencyFormatter } from "./components/Utilities";
import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import React, { useState } from "react";
import "./App.css";
import BracketRates from "./components/BracketRates";
import Breakdown from "./components/Breakdown";
import Header from "./components/Header";
import Input from "./components/Input";
import { taxBrackets } from "./components/Utilities";

function App() {
  const [agi, setAgi] = useState(0);
  const [filingStatus, setFilingStatus] = useState(taxBrackets[0]);

  return (
    <EuiProvider colorMode="light">
      <div className="App">
        <Header />
        <Input
          agi={agi}
          setAgi={setAgi}
          setFilingStatus={setFilingStatus}
          filingStatus={filingStatus}
        />
        <Breakdown income={agi} filingStatus={filingStatus} />
        <BracketRates filingStatus={filingStatus} />
        {/* <BillionaireBreakdown /> // Might event build a component that lets 
        you select a billionaire, then updates with their AGI so you can see
        how much taxes they _should_ be paying? */}
      </div>
    </EuiProvider>
  );
}

export default App;

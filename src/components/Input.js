import {
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiPanel,
  EuiSelect,
  EuiSpacer,
} from "@elastic/eui";
import React from "react";
import { taxBrackets } from "./Utilities";

function Input(props) {
  // removes commas if anyone puts them in the input
  function removeCommas(string) {
    return parseInt(string.replace(/\,/g, ""), 10);
  }

  return (
    <div>
      <EuiPanel>
        <EuiForm component="form">
          <EuiFlexGroup direction="row">
            <EuiFlexItem>
              <EuiFormRow label="What's your annual adjusted gross income?">
                <EuiFieldText
                  name="agi"
                  onChange={(e) => props.setAgi(removeCommas(e.target.value))}
                  prepend="$"
                />
              </EuiFormRow>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFormRow label="What's your filing status?">
                <EuiSelect
                  options={taxBrackets.map((item) => ({
                    text: item.name,
                    value: item.id,
                  }))}
                  value={props.filingStatus.id}
                  onChange={(e) =>
                    props.setFilingStatus(
                      taxBrackets.find((item) => item.id === e.target.value)
                    )
                  }
                />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiForm>
      </EuiPanel>
      <EuiSpacer />
    </div>
  );
}

export default Input;

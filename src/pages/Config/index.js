import React, { useState } from "react";
import Button from "../../components/Button";
import "./index.css";
import Input from "../../components/Input";
import ToggleButtonGroup from "../../components/ToggleButtonGroup";
import { Link } from "react-router-dom";

function Config() {
  const [btnState, setBtnState] = useState(null);
  const [inputValue, setInputValue] = useState("100");

  return (
    <>
      <div className="config-row">
        <h1>Times to run</h1>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="config-row">
        <h1>Should switch the door</h1>
        <ToggleButtonGroup
          states={[
            { label: "Always", value: "switch" },
            { label: "Never", value: "keep" },
            { label: "Run Both", value: "both" },
          ]}
          btnState={btnState}
          setBtnState={setBtnState}
        />
      </div>
      <div className="action-row">
        <Link to={`/results?type=${btnState}&rounds=${inputValue}`}>
          <Button primary>Run the simulation</Button>
        </Link>
      </div>
    </>
  );
}

export default Config;

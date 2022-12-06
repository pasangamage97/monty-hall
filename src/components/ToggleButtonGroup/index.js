import { useState } from "react";
import Button from "../Button";
import "./index.css";

function ToggleButtonGroup({ btnState, setBtnState }) {
  
  return (
    <div className="toggleButton">
      <Button
        onClick={() => setBtnState("always")}
        active={btnState == "always"}
      >
        Always
      </Button>
      <Button
        onClick={() => setBtnState("never")}
        active={btnState == "never"}
      >
        Never
      </Button>
      <Button
        onClick={() => setBtnState("runBoth")}
        active={btnState == "runBoth"}
      >
        Run Both
      </Button>
    </div>
  );
}

export default ToggleButtonGroup;

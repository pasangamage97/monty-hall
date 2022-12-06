import React, { useState } from "react";
//import "./Home.css";
import Button from "../../components/Button";

function Config() {
  const [pickedType, setPickedType] = useState(null);

  return (
    <div>
      <h1>I want to pick the door</h1>
      <Button
        active={pickedType == "automatic"}
        onClick={() => setPickedType("automatic")}
      >
        Automatically
      </Button>
      <Button
        active={pickedType == "manual"}
        onClick={() => setPickedType("manual")}
      >
        Manually
      </Button>
    </div>
  );
}

export default Config;

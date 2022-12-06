import React, { useState } from "react";
import Button from "../../components/Button";
//import "./Home.css";
import Input from "../../components/Input";
import ToggleButtonGroup from "../../components/ToggleButtonGroup";

function Config() {
  const [btnState, setBtnState] = useState(null);
  const [inputValue, setInputValue] = useState("100");

  async function submitData() {
    const url = "/";
    const body = {
      state: btnState,
      numOfSimulations: Number.parseInt(inputValue),
    };
    
    const res= await fetch(url, { method: "POST", body: JSON.stringify(body) });
    const result = await res.json();

  }

  return (
    <>
      <div>
        <h1>Run for</h1>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <h1>Switched the door</h1>
        <ToggleButtonGroup btnState={btnState} setBtnState={setBtnState} />
      </div>
      <div>
        <Button
          onClick={() => {
            console.log(btnState, inputValue);
          }}
        >
          Run
        </Button>
      </div>
    </>
  );
}

export default Config;

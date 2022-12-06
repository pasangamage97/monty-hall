import Button from "../Button";
import "./index.css";

function ToggleButtonGroup({ states, btnState, setBtnState }) {
  return (
    <div className="toggleButton">
      {states.map((state) => (
        <Button
          onClick={() => setBtnState(state?.value)}
          active={btnState == state?.value}
        >
          {state.label}
        </Button>
      ))}
    </div>
  );
}

export default ToggleButtonGroup;

import "./index.css";
import Result from "../../components/Result";
import { useSearchParams } from "react-router-dom";
import ToggleButtonGroup from "../../components/ToggleButtonGroup";
import { useMemo, useState } from "react";

function Results() {
  const [params] = useSearchParams();
  const type = useMemo(() => params.get("type"), [params]);
  const rounds = useMemo(() => params.get("rounds"), [params]);

  const [activeState, setActiveState] = useState(type === "both" ? "switch" : type);

  return (
    <div className="Result-page">
      {type == "both" && (
        <ToggleButtonGroup
          states={[
            { label: "Switch Results", value: "switch" },
            { label: "Keep Results", value: "keep" },
          ]}
          btnState={activeState}
          setBtnState={setActiveState}
        />
      )}

      <Result numOfSimulations={rounds} type={activeState} />
    </div>
  );
}

export default Results;

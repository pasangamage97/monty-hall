import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Table from "../../components/Table";
import "./index.css";
import { useEffect, useMemo, useState } from "react";

function Result({ type, numOfSimulations }) {
  const [resultKeep, setResultkeep] = useState(null);
  const [resultSwitch, setResultSwitch] = useState(null);

  const result = useMemo(
    () => (type === "keep" ? resultKeep : resultSwitch),
    [resultKeep, resultSwitch, type]
  );

  async function submitData() {
    if (type === "keep" && resultKeep != null) return;
    if (type === "switch" && resultSwitch != null) return;
    const url = process.env.REACT_APP_API_BASE_URL + "/api/RunSimulation";
    const body = {
      type,
      numOfSimulations,
    };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"text/plain"
      },
      body: JSON.stringify(body),
    });
    const result = await res.json();
    console.log(result);
    type === "keep" ? setResultkeep(result) : setResultSwitch(result);
  }

  useEffect(() => {
    submitData();
  }, [type]);

  if (!result) {
    return <div>Loading</div>;
  }

  return (
    <div className="Result-page">
      <div className="Result-row">
        <div className="Result-col Result-col-2">
          <h1>After running the simulation</h1>
          <h3>
            Winning percentage by{" "}
            {result.calculatedData.isSwitched ? "switching" : "not switching"}{" "}
            the door is {result.calculatedData.winningPercentage}%
          </h3>
          <h4>Detailed report of the simulation can be found below</h4>
        </div>
        <div className="Result-col Result-col-3">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                format={"%"}
                nameKey="label"
                isAnimationActive={false}
                data={[
                  {
                    value: result.calculatedData.winningPercentage,
                    label: "Winning",
                  },
                  {
                    value: result.calculatedData.losingPercentage,
                    label: "Losing",
                  },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={140}
                label
              >
                <Cell fill="#88D9E6" />
                <Cell fill="#F7A072" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Table data={result.rawData} />
    </div>
  );
}

export default Result;

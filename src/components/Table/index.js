import React from "react";
import { generateXlsx } from "../../utils/excel";
import Button from "../Button";
import "./index.css";

const Table = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="row-export">
        <Button onClick={() => generateXlsx(data)}>Export to Excel</Button>
      </div>
      <table className="table">
        <thead>
          <tr className="table-row table-row-header">
            <th className="table-cell table-cell-header">Round</th>
            <th className="table-cell table-cell-header">Door with Car</th>
            <th className="table-cell table-cell-header">Chosen Door</th>
            <th className="table-cell table-cell-header">Switched</th>
            <th className="table-cell table-cell-header">Result</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className="table-row">
              <td className="table-cell">{row.numOfIteration}</td>
              <td className="table-cell">{row.doorWithTheCar}</td>
              <td className="table-cell">{row.choosenDoor}</td>
              <td className="table-cell">{row.switchedOrNot ? "Yes" : "No"}</td>
              <td className="table-cell">{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

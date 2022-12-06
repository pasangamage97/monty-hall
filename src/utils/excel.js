import * as XLSX from "xlsx";

export function generateXlsx(data) {
  const wb = XLSX.utils.book_new();

  const wsData = [
    ["Iteration", "Door with car", "Chosen door", "Switched", "Result"],
    ...data.map((row) => [
      row.numberOfIteration,
      row.doorWithTheCar,
      row.choosenDoor,
      row.switchedOrNot ? "Yes" : "No",
      row.result,
    ]),
  ];

  const ws = XLSX.utils.aoa_to_sheet(wsData);

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  XLSX.writeFile(wb, "result.xlsx");
}

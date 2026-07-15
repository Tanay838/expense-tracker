import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./ExportExcel.css";

function ExportExcel({ transactions }) {
  function exportToExcel() {
    if (transactions.length === 0) {
      alert("No transactions to export.");
      return;
    }

    const data = transactions.map((item) => ({
      Title: item.title,
      Amount: item.amount,
      Type: item.type,
      Category: item.category,
      Date: item.date,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Transactions"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, "Expense_Tracker.xlsx");
  }

  return (
    <button
      className="export-btn"
      onClick={exportToExcel}
    >
      📊 Export Excel
    </button>
  );
}

export default ExportExcel;
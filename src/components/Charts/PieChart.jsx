import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart({ income, expense, darkMode }) {
  // const darkMode = document.body.classList.contains("dark");

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: [
          "#16a34a",
          "#ef4444",
        ],
        borderColor: darkMode ? "#1f2937" : "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h2>Income vs Expense</h2>

      <div className="chart-container">
        <Pie
  key={darkMode ? "dark" : "light"}
  data={data}
  options={{
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: darkMode ? "#ffffff" : "#111827",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: darkMode ? "#1f2937" : "#ffffff",
        titleColor: darkMode ? "#ffffff" : "#111827",
        bodyColor: darkMode ? "#ffffff" : "#111827",
        borderColor: darkMode ? "#374151" : "#e5e7eb",
        borderWidth: 1,
      },
    },
  }}
/>
      </div>
    </div>
  );
}

export default PieChart;
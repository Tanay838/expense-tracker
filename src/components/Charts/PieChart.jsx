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

function PieChart({ income, expense }) {
  const data = {
    labels: ["Income", "Expense"],

    datasets: [
      {
        data: [income, expense],
        backgroundColor: [
          "#16a34a",
          "#ef4444",
        ],
      },
    ],
  };

  return (
     <div className="chart-card">
    <h2>Income vs Expense</h2>

    <div className="chart-container">
      <Pie
        data={data}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </div>
  </div>
  );
}

export default PieChart;
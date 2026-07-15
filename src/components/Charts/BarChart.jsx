import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import "./BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function BarChart({ transactions }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyExpense = new Array(12).fill(0);

  transactions.forEach((item) => {
    if (item.type === "Expense") {
      const month = new Date(item.date).getMonth();
      monthlyExpense[month] += Number(item.amount);
    }
  });

  const data = {
    labels: months,

    datasets: [
      {
        label: "Expenses",
        data: monthlyExpense,
        backgroundColor: "#2563eb",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="bar-chart-card">
      <h2>Monthly Expenses</h2>

      <Bar data={data} />
    </div>
  );
}

export default BarChart;
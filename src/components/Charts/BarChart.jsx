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

function BarChart({ transactions, darkMode }) {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
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
        label: "Monthly Expenses",
        data: monthlyExpense,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return "#2563eb";

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );

          gradient.addColorStop(0, "#3b82f6");
          gradient.addColorStop(1, "#60a5fa");

          return gradient;
        },

        borderRadius: 12,
        borderSkipped: false,
        hoverBackgroundColor: "#1d4ed8",
        hoverBorderWidth: 2,
        maxBarThickness: 45,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: darkMode ? "#1f2937" : "#ffffff",
        titleColor: darkMode ? "#ffffff" : "#111827",
        bodyColor: darkMode ? "#ffffff" : "#111827",
        borderColor: darkMode ? "#374151" : "#d1d5db",
        borderWidth: 1,
        padding: 12,

        callbacks: {
          label: (context) =>
            `₹${context.parsed.y.toLocaleString()}`,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: darkMode ? "#f9fafb" : "#374151",
          font: {
            size: 13,
            weight: "600",
          },
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          color: darkMode
            ? "rgba(255,255,255,.08)"
            : "#e5e7eb",
        },

        ticks: {
          color: darkMode ? "#f9fafb" : "#374151",

          callback(value) {
            return "₹" + value;
          },
        },
      },
    },
  };

  return (
    <div className="bar-chart-card">
      <h2>📊 Monthly Expenses</h2>

      <div className="bar-chart-container">
        <Bar
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default BarChart;
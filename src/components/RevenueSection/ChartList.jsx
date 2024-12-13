import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCard = () => {
  const data = {
    labels: ["Completed", "Delayed", "In progress", "Waiting"],
    datasets: [
      {
        data: [22, 44, 11, 23], // Values for each section
        backgroundColor: ["#3b82f6", "#f87171", "#fbbf24", "#a3e635"], // Section colors
        hoverOffset: 4, // Hover effect
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top", // Legend position
        labels: {
          usePointStyle: true,
        },
      },
    },
    cutout: "60%", // Doughnut hole size
    responsive: true, // Ensure the chart is responsive
  };

  return <Doughnut data={data} options={options} />;
};

export default ChartCard;

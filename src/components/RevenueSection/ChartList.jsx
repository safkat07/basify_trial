import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCard = () => {
  const data = {
    labels: ["Completed", "Delayed", "In progress", "Waiting"],
    datasets: [
      {
        data: [22, 44, 11, 23],
        backgroundColor: ["#3b82f6", "#f87171", "#fbbf24", "#a3e635"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    cutout: "60%",
    responsive: true,
  };

  return <Doughnut data={data} options={options} />;
};

export default ChartCard;

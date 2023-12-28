// Import necessary modules
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define a TypeScript type for props
type TotalStockedByHatcheryChartProps = {
  lakes: Array<{ hatchery: string; sum_1: number }>;
};

const TotalStockedByHatcheryChart: React.FC<
  TotalStockedByHatcheryChartProps
> = ({ lakes }) => {
  // Check if lakes array is not empty
  if (lakes && lakes.length > 0) {
    console.log({ lakes });
    const hatcheries = lakes.map((lake) => lake.hatchery);
    const totalStockedFish = lakes.map((lake) => lake.sum_1);

    const chartData = {
      labels: hatcheries,
      datasets: [
        {
          label: "Amount Produced",
          data: totalStockedFish,
          borderColor: "#9fd3c7",
          backgroundColor: "#9fd3c7",
          borderWidth: 1,
          pointRadius: 3,
        },
      ],
    };

    const chartOptions = {
      scales: {
        y: {
          ticks: { color: "#ececec", beginAtZero: true },
        },
        x: {
          ticks: { color: "#ececec" },
        },
      },
    };

    return (
      <div className="w-full">
        <h2 className="lg:text-5xl md:text-4xl sm:text-2xl">
          Total Stocked by hatchery
        </h2>
        <Bar data={chartData}  />
      </div>
    );
  }

  return <p>No data available</p>;
};

export default TotalStockedByHatcheryChart;

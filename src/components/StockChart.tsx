// components/StockChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
interface StockChartProps {
  data: [string, number][];
  loading: boolean;
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  Chart.register();
  if (data && data.length > 0) {
    const [dates, totalStockedFish] = data.reduce(
      (acc, [date, totalStocked]) => {
        acc[0].push(date);
        acc[1].push(totalStocked);
        return acc;
      },
      [[], []] as [string[], number[]]
    );

    const chartData = {
      labels: dates,
      datasets: [
        {
          label: "Amount Stocked",
          data: totalStockedFish,
          backgroundColor: "#9fd3c7",
          borderColor: "#9fd3c7",
          borderWidth: 1,
          pointRadius: 2,
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
          Total Stocked in Washington by Date
        </h2>
        <Line className="" data={chartData} /> {/* options={chartOptions}  */}
      </div>
    );
  } else {
    return <div>NO DATA</div>;
  }
};

export default StockChart;

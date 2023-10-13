import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement);

const data = {
  labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "New Students",
      data: [25, 34, 107, 200, 300, 500],
      backgroundColor: "rgba(22, 99, 255, 0.8)",
      borderColor: "rgba(22, 99, 255, 0.8)",
      borderWidth: 1,
      barThickness: 50,
      yAxisID: "students",
    },
    {
      label: "Countries",
      data: [1, 1, 1, 2, 3, 5],
      backgroundColor: "rgba(54, 200, 235, 0.8)",
      borderColor: "rgba(54, 200, 235, 0.8)",
      borderWidth: 1,
      barThickness: 50,
      yAxisID: "countries",
    },
  ],
};

const options = {
  indexAxis: "x",
  scales: {
    x: {
      stacked: false,
      beginAtZero: true,
      max: 100,
      grid: {
        display: false,
      },
    },
    students: {
      type: "linear",
      position: "left",
      grid: {
        display: false,
      },
    },
    countries: {
      type: "linear",
      position: "right",
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 20,
      bottom: 10,
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const GrowthGraph = () => {
  return (
    <div className="mt-2 mb-20">
      <h2 className="font-bold flex justify-center">The Growth of A2sv</h2>
      <div className="flex justify-center">
        <div className="w-9/12 h-96 relative">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GrowthGraph;

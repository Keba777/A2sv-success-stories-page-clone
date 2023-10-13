import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement } from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement);

const data = {
  labels: ["Average", "2020", "2021", "2022"],
  datasets: [
    {
      label: "Success Rate",
      data: [2, 27, 59, 70],
      backgroundColor: [
        "rgba(195, 67, 34, 0.8)",
        "rgba(22, 99, 255, 0.8)",
        "rgba(22, 99, 255, 0.8)",
        "rgba(22, 99, 255, 0.8)",
      ],
      borderColor: "rgba(22, 99, 255, 0.8)",
      borderWidth: 1,
      barThickness: 60,
      categoryPercentage: 0.7,
    },
  ],
};

const options = {
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: true,
      max: 80,
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.dataset.label + ": " + context.raw + "%";
        },
      },
    },
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

const SuccessGraph = () => {
  return (
    <div className="mt-2">
      <div className="flex justify-center">
        <div className="w-4/6 h-80 relative">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SuccessGraph;

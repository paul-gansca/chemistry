import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["Senior", "Mid", "Junior"];

export const data = {
  labels,
  datasets: [
    {
      label: "Front End",
      data: labels.map(() => Math.floor(Math.random() * 50)),
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Back End",
      data: labels.map(() => Math.floor(Math.random() * 50)),
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "QA",
      data: labels.map(() => Math.floor(Math.random() * 20)),
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;

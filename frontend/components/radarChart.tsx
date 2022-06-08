import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// const goalDataValues = [7, 3, 5, 2, 1, 1];

const defaultData = {
  labels: [
    "React JS",
    "Next JS",
    "Node JS",
    "JQuery",
    "Scrum Master",
    "Designer",
  ],
  datasets: [
    {
      label: "Project",
      data: [100, 100, 100, 100, 100, 100],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Team",
      data: [100, 33, 70, 50, 100, 50],
      backgroundColor: "rgba(53, 162, 235, 0.2)",
      borderColor: "rgba(53, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const RadarChart = ({ data = defaultData }) => {
  return <Radar data={data} />;
};

export default RadarChart;

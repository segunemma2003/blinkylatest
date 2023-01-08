/* eslint-disable no-new */

import {
  Chart as ChartJS,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js/auto';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip
);

function MultipleLineChart() {
  const labels = ['Sep', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  const [data] = useState({
    labels,
    datasets: [
      {
        label: 'Podcast',
        data: [150, 220, 120, 380, 200, 450, 500],
        backgroundColor: ['#F2994A'],
        borderColor: ['#F2994A'],
        borderWidth: 1,
        tension: 0.5,
      },
      {
        label: 'Audiograph',
        data: [70, 150, 40, 320, 90, 400, 430],
        backgroundColor: ['#EB5757'],
        borderColor: ['#EB5757'],
        borderWidth: 1,
        tension: 0.5,
      },
    ],
  });
  return (
    <div className="h-full">
      <Line data={data} />
    </div>
  );
}

export default MultipleLineChart;

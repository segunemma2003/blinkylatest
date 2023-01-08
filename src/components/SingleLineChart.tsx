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

function SingleLineChart() {
  const labels = ['Sep', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  const [data] = useState({
    labels,
    datasets: [
      {
        label: '',
        data: [150, 300, 130, 400, 140, 450, 500],
        backgroundColor: ['#2F80ED'],
        borderColor: ['#2F80ED'],
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

export default SingleLineChart;

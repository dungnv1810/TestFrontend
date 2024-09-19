import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Subscription = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'High - 2024',
        data: [28, 29, 33, 36, 32, 32, 33],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 8,
        borderWidth: 5
      },
      {
        label: 'Low - 2022',
        data: [12, 11, 14, 18, 17, 13, 13],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(84, 84, 84, 1)',
        tension: 0.2,
        pointBackgroundColor: 'rgba(84, 84, 84, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 8,
        borderWidth: 5
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      title: {
        display: true,
        text: 'Average High & Low Temperature',
        font: {
          size: 20,
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 5,
        max: 40,
        ticks: {
          stepSize: 5, 
          callback: function(value, index, ticks) {
            return value;
          },
          font: {
            size: 16,
          },
        },
      },
      x: {
        ticks: {
          color: '#000',
          font: {
            size: 16,
          },
        },
      }
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Subscription;
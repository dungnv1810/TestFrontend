import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Revenue = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue (in USD)',
        data: [5000, 6000, 8000, 7000, 9000, 10000, 11000, 12000, 9500, 10300, 9700, 8500],
        backgroundColor: [
          'rgba(109, 120, 173, 0.5)',
          'rgba(81, 205, 160, 0.5)',
          'rgba(223, 121, 112, 0.5)',
          'rgba(76, 156, 160, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(201, 203, 207, 0.5)'
        ],
        borderColor: [
          'rgb(109, 120, 173)',
          'rgb(81, 205, 160)',
          'rgb(223, 121, 112)',
          'rgb(76, 156, 160)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Simple Column Chart With Index Lables',
        font: {
          size: 20,
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value;
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
    <>
      <div>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default Revenue;
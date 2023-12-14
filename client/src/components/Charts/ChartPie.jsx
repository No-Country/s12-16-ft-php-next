"use client"

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const InventoryChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map(item => item.category),
          datasets: [{
            label: 'Movimientos de inventario',
            data: data.map(item => item.value),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          // scales: {
          //   x: {
          //     title: {
          //       display: true,
          //       text: 'Meses'
          //     }
          //   },
          //   y: {
          //     title: {
          //       display: true,
          //       text: 'Unidades'
          //     }
          //   },
          // },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          layout: {
            padding: {
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className='rounded-lg border p-5 shadow-lg'>
      <h2 className='mb-2 p-3 text-xl font-semibold'>Movimientos de Inventario</h2>
      <canvas ref={chartContainer} id="my-chart" style={{ maxWidth: '344px', maxHeight: '240px' }}></canvas>
    </div>
  );
};

export default InventoryChart;
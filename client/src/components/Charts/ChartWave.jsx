"use client";

import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const ChartWave = () => {
  const [dataWave] = useState([
    {
      category: "Ene",
      value: 10,
    },
    {
      category: "Feb",
      value: 15,
    },
    {
      category: "Mar",
      value: 25,
    },
    {
      category: "Abr",
      value: 50,
    },
    {
      category: "May",
      value: 70,
    },
    {
      category: "Jun",
      value: 80,
    },
    {
      category: "Jul",
      value: 75,
    },
    {
      category: "Ago",
      value: 75,
    },
    {
      category: "Sep",
      value: 80,
    },
    {
      category: "Oct",
      value: 90,
    },
    {
      category: "Nov",
      value: 95,
    },
    {
      category: "Dic",
      value: 135,
    },
  ]);

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);


  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: dataWave.map((item) => item.category),
          datasets: [
            {
              label: "Ventas",
              data: dataWave.map((item) => item.value),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
            },
          ],
        },
        options: {
          animation: {
            tension: {
              duration: 600,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
          scales: {
            y: {
              min: 0,
              max: 150,
            },
          },
        },
      });
    }
  }, [dataWave]);

  return (
    <div className="rounded-lg border p-5 shadow-lg w-1/2">
      <h2 className="mb-2 p-3 text-xl font-bold">Ventas por Mes</h2>
      <canvas
        ref={chartContainer}
        id="my-chart"
        style={{ maxWidth: "344px", maxHeight: "240px", }}
      ></canvas>
    </div>
  );
};

export default ChartWave;

import React from "react";
import ChartPie from "@/components/Charts/ChartPie";
import ChartWave from "@/components/Charts/ChartWave";

const Page = () => {
  return (
    <div className="h-screen p-5 text-textColor">
      <div className="grid grid-cols-2 gap-4">
        <ChartPie />
        <ChartWave />
        <div className="-mt-28 grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-5 align-middle shadow-xl">
            <p>Cantidad de ventas por mes</p>
            <h2 className="text-4xl font-extrabold">26</h2>
          </div>
          <div className="rounded-lg border p-5 shadow-xl">
            <p>Cantidad de ventas por año</p>
            <h2 className="text-4xl font-extrabold">349</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

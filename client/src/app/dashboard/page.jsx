import React from 'react';
import ChartPie from '@/components/Charts/ChartPie';
import ChartWave from '@/components/Charts/ChartWave'
const Page = () => {
  return (
    <div className="h-screen p-5 text-textColor">
      <div className="grid grid-cols-2 gap-4">
        <ChartPie />
        <ChartWave />
        <div className="rounded-lg border p-5 shadow-lg"></div>
        <div className="rounded-lg border p-5 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Page;
import React from 'react';
import InventoryChart from '@/components/Charts/ChartPie';

const Page = () => {
  const data = [
    {
      category: 'Enero',
      value: 100,
    },
    {
      category: 'Febrero',
      value: 200,
    },
    {
      category: 'Marzo',
      value: 300,
    },
  ];

  return (
    <div className="h-screen p-5 text-textColor">
      <h1 className='mb-2 p-3 text-2xl font-bold'>Dashboard</h1>
      <InventoryChart data={data} />
    </div>
  );
};

export default Page;
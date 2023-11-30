import React from "react";
import data from "./data";

const ExampleTable = () => {
    // Este componente deberia recibir por props data que seria el array con todos los elementos de la tabla
    // por ahora se importa un json data que simula ser este
  return (
    <div className="h-screen p-5 text-textColor">
      <div className="overflow-auto h-full border rounded-lg shadow-lg p-5">
      <h1 className="mb-2 text-xl p-3 font-bold">Stock</h1>
        <table className="w-full">
          <thead className="border-b-2">
            <tr className="">
              <th className="w-24 p-3 text-left text-sm font-semibold tracking-wide">
                Artículo
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Código
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Descripción
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Categoría
              </th>
              <th className="p-3 text-left text-sm font-semibold tracking-wide">
                Stock
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="w-32 flex justify-center px-4 py-2">
                  <img
                    src={
                      item.article ||
                      "https://www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png"
                    }
                    alt="Artículo"
                    className="flex h-20 w-20 justify-center rounded-2xl shadow-lg"
                  />
                </td>
                <td className="w-24 whitespace-nowrap p-3 text-sm">
                  {item.code}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {item.description}
                </td>
                <td className="whitespace-nowrap p-3 text-sm">
                  <div
                    className="inline-block rounded-3xl font-bold bg-opacity-50 p-2"
                    style={{ backgroundColor: `${item.category.color}70` }}
                  >
                    {item.category.name}
                  </div>
                </td>

                <td className="whitespace-nowrap p-3 text-sm">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExampleTable;

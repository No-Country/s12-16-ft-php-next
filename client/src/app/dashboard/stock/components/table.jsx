import React, { useState } from "react";
import data from "./data";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ExampleTable = ({ selectedOption, selectedCode }) => {
  console.log("codigo:");
  // Este componente deberia recibir por props data que seria el array con todos los elementos de la tabla
  // por ahora se importa un json data que simula ser este
  let filteredData = selectedOption
    ? data.filter((item) => item.category.name === selectedOption)
    : data;

  // Filtrar por código si se proporciona selectedCode
  filteredData = selectedCode
    ? data.filter((item) => item.selectedCode === selectedCode)
    : filteredData;

  // Lógica para la paginación
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const theme = createTheme({
    palette: {
      green: {
        main: '#167C8A', 
      },
    },
  });

  return (
    <div className="h-screen p-5 text-textColor">
      <div className="rounded-lg border bg-white p-5 shadow-lg">
        <h1 className="mb-2 p-3 text-xl font-bold">Stock</h1>

        <table className="w-full">
          <thead className="border-b-2">
            <tr className="">
              <th className="w-24 p-3 text-left text-sm tracking-wide">
                Artículo
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Código</th>
              <th className="p-3 text-left text-sm tracking-wide">
                Descripción
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Categoría</th>
              <th className="p-3 text-left text-sm tracking-wide">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {filteredData?.slice(startIndex, endIndex).map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="flex w-32 justify-center px-4 py-2">
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
                    className={`inline-block rounded-3xl border-2 p-2 font-bold border-${item.category.color}`}
                    style={{
                      backgroundColor: `${item.category.color}50`,
                      borderColor: `${item.category.color}`, // Establecer el color del borde aquí
                    }}
                  >
                    {item.category.name}
                  </div>
                </td>

                <td className="whitespace-nowrap p-3 text-sm">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center">
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={page}
            color="primary"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleTable;

import React, { useState } from "react";
import data from "./data";
import Pagination from "@mui/material/Pagination";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExampleTable = ({ selectedCode, selectedOption }) => {
  // Lógica para la paginación
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  let filteredData = [...data];

  if (selectedCode) {
    filteredData = filteredData.filter((item) =>
      item.numero.toLowerCase().includes(selectedCode.toLowerCase()),
    );
  }

  if (selectedOption) {
    filteredData.sort((a, b) => {
      if (a[selectedOption] < b[selectedOption]) {
        return -1;
      }
      if (a[selectedOption] > b[selectedOption]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div className="h-screen p-5 text-textColor">
      <div
        className="rounded-lg border bg-white p-5 shadow-lg"
        style={{ height: "70vh" }}
      >
        <table className="w-full">
          <thead className="border-b-2">
            <tr className="text-textTitleColor">
              <th className="w-24 p-3 text-left text-sm tracking-wide">
                Numero
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Fecha</th>
              <th className="p-3 text-left text-sm tracking-wide">Hora</th>
              <th className="p-3 text-left text-sm tracking-wide">Tipo</th>
              <th className="p-3 text-left text-sm tracking-wide">
                Realizada por
              </th>
              <th className="p-3 text-left text-sm tracking-wide">Estado</th>
              <th className="p-3 text-left text-sm tracking-wide"></th>{" "}
              {/* Celda para el ícono MoreVertIcon */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-textColor">
            {filteredData.slice(startIndex, endIndex).map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="whitespace-nowrap p-3 text-sm">{item.numero}</td>
                <td className="whitespace-nowrap p-3 text-sm">{item.fecha}</td>
                <td className="whitespace-nowrap p-3 text-sm">{item.hora}</td>
                <td className="whitespace-nowrap p-3 text-sm">{item.tipo}</td>
                <td className="whitespace-nowrap p-3 text-sm">
                  {item.realizadaPor}
                </td>
                <td className="whitespace-nowrap p-1 text-sm">
                  {item.estado ? (
                    <div
                      className={`inline-block flex items-center justify-center rounded-3xl border border-2 p-2 font-bold ${
                        item.estado === "Pendiente"
                          ? "border-yellow-500"
                          : "border-green-500"
                      }`}
                      style={{
                        width: "100px",
                        backgroundColor:
                          item.estado === "Pendiente"
                            ? "rgba(255, 255, 0, 0.2)"
                            : "rgba(144, 238, 144, 0.5)",
                        borderColor:
                          item.estado === "Pendiente"
                            ? "rgba(255, 255, 0, 1)"
                            : "rgba(144, 238, 144, 1)",
                      }}
                    >
                      {item.estado}
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="whitespace-nowrap p-1 text-sm">
                  <MoreVertIcon /> {/* Ícono MoreVertIcon */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)} // Usar filteredData.length
          page={page}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ExampleTable;

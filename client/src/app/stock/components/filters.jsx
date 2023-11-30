import React from "react";

const Filters = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      {/* Barra de búsqueda */}
      <div className="flex items-center bg-white rounded-full p-2 shadow-md">
        <label htmlFor="search" className="mr-4">
          Buscar:
        </label>
        <input
          type="text"
          id="search"
          placeholder="Escribe aquí..."
          className="px-3 py-2 "
        />
      </div>

      {/* Filtros select */}
      <div className="flex items-center">
        <label htmlFor="filter" className="mr-4">
          Filtrar por:
        </label>
        <select
          id="filter"
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Seleccionar...</option>
          <option value="option1">Opción 1</option>
          <option value="option2">Opción 2</option>
          <option value="option3">Opción 3</option>
        </select>
      </div>

      {/* Otros filtros select, botones, etc. */}
    </div>
  );
};

export default Filters;

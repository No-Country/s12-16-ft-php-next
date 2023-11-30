import React from "react";

const Filters = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4">
      {/* Barra de búsqueda */}
      <div className="flex items-center rounded-full bg-white p-2 shadow-md">
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
          className="rounded-md border border-gray-300 px-3 py-2"
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

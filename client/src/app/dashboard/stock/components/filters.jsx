"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import data from "./data";
import NotificationPopover from "./NotificationPopover";

const Filters = ({ func }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    func(selectedValue, searchValue); // Se pasa la opción seleccionada y el valor de búsqueda
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    func("", searchValue); // Se pasa solo el valor de búsqueda al componente Page
    console.log("Codigo:", searchValue);
  };

  return (
    <div className="flex items-center gap-6 p-4">
      <div className="flex items-center rounded-full bg-white p-2 shadow-md">
        <input
          type="text"
          id="search"
          placeholder="Buscar por código"
          className="mx-2 p-2"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>

      <div className="flex items-center">
        <select
          id="filter"
          className="flex items-center rounded-full bg-white p-2 px-4 shadow-md"
          onChange={handleSelectChange} // Maneja el cambio de selección
          value={selectedOption} // Establece el valor seleccionado del estado
        >
          <option
            key="default"
            className="bg-gray-100 text-gray-800 shadow"
            value=""
          >
            Categoría
          </option>
          {data?.map((item, index) => (
            <option
              key={index}
              value={item.category.name}
              className="bg-gray-100 text-gray-800"
            >
              {item.category.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="flex items-center rounded-full bg-yellowBg p-2 px-4 font-medium shadow-md hover:bg-hoverYellow"
        // onClick={handleAddItem}
        style={{
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        Añadir Artículo
      </button>

      <button
        className="flex items-center rounded-full bg-greenBg p-2 px-4 font-medium text-white shadow-md hover:bg-hoverGreen"
        // onClick={handleGenerateReceipt}
        style={{
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        Generar Remito
      </button>
      <NotificationPopover />
    </div>
  );
};

export default Filters;

import data from "../../stock/components/data"

const FilterInput = () => {
    return (
        <div className="flex items-center">
            <select
                id="filter"
                className="flex items-center rounded-full bg-white p-2 px-4 shadow-md"
            //   onChange={handleSelectChange} // Maneja el cambio de selección
            //   value={selectedOption} // Establece el valor seleccionado del estado
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
    )
}

export default FilterInput
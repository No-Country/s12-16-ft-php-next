import SearchIcon from "@mui/icons-material/Search"

const SearchInput = () => {
    return (
        <div className="flex items-center rounded-full bg-white p-2 shadow-md">
            <input
                type="text"
                id="search"
                placeholder="Buscar"
                className="mx-2 p-2"
            //   value={searchValue}
            //   onChange={handleInputChange}
            />
            <button>
                <SearchIcon />
            </button>
        </div>
    )
}

export default SearchInput
import React from "react";
import Items from "../../API/Items.json";
import { useAppContext } from "../../context/AppContext";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchBox = () => {
  const { search, setSearch, filter, setFilter } = useAppContext();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const uniqueArray = Array.from(
    new Map(Items.map((item) => [item.category, item.category])).values()
  );

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
      {/* Search Input box */}
      <div className="relative">
        <FaSearch className="absolute top-2.5 left-3 text-gray-300" />
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-64 sm:w-72 bg-gray-700 text-white placeholder-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search products..."
          value={search}
          onChange={handleInputChange}
        />
      </div>

     {/* Category Selection box */}
      <div className="relative">
        <FaFilter className="absolute top-2.5 left-3 text-gray-300" />
        <select
          value={filter}
          onChange={handleSelectChange}
          className="pl-10 pr-4 py-2 w-44 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          {uniqueArray.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBox;

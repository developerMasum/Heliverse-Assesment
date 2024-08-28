import React, { useState } from "react";
import assets from "@/assets";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Trigger search as the user types
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-1/2 max-w-md">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={assets.images.search} alt="Search" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

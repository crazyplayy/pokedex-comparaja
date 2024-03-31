import React, { useState } from "react";
import { Input } from "antd";
import { usePokemonContext } from "../context/PokemonContext";

const { Search } = Input;

const SearchBar = () => {
  const { searchPokemon } = usePokemonContext();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    searchPokemon(searchText);
    setSearchText("");
  };

  return (
    <div>
      <Search
        placeholder="Which Pokemon are you looking for?"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      />
    </div>
  );
};

export default SearchBar;
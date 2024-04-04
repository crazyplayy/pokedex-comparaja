import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { usePokemonContext } from "../context/PokemonContext";
import { TbPokeball } from "react-icons/tb";
import Pokelogo from "../assets/Pokelogo.png";
import "../styles/components/SearchBar.css";

const { Search } = Input;

const SearchBar = () => {
  const { searchPokemon, setError } = usePokemonContext();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (!searchText.trim()) {
      setError("Please enter a Pokémon name or number");
      return;
    }
    searchPokemon(searchText);
    setSearchText("");
  };

  return (
    <div className="search-bar-container">
      <img src={Pokelogo} alt="Logo" className="logo-image" />
      <div className="input-container">
        <Search
          placeholder="Who are you looking for?"
          allowClear
          enterButton={<TbPokeball className="search-icon" />}
          size="large"
          onSearch={handleSearch}
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
          className="search-input"
        />
        <Tooltip title="Search for a Pokémon name or number">
          <QuestionCircleOutlined className="tooltip-icon" />
        </Tooltip>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { Input, Tooltip, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { usePokemonContext } from "../context/PokemonContext";
import { TbPokeball } from "react-icons/tb";
import Pokelogo from "../assets/Pokelogo.png";
import "../styles/components/SearchBar.css";

const { Search } = Input;

const SearchBar = () => {
  const { searchPokemon } = usePokemonContext();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (!searchText.trim()) { //handles empty input
      message.error("Please enter a Pokémon name or number", 2);
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
          onSearch={handleSearch} //when enter or button is clicked
          onChange={(event) => setSearchText(event.target.value)} // Update search text on change
          value={searchText}
          className="search-input"
        />
        <Tooltip title="Search for a Pokémon name or number"> {/* Tooltip for providing search instructions */}
          <QuestionCircleOutlined className="tooltip-icon" />
        </Tooltip>
      </div>
    </div>
  );
};

export default SearchBar;

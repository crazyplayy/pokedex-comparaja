import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { usePokemonContext } from "../context/PokemonContext";
import Pokelogo from "../assets/Pokelogo.png";

const { Search } = Input;

const SearchBar = () => {
  const { searchPokemon } = usePokemonContext();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    searchPokemon(searchText);
    setSearchText("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Pokelogo} alt="Logo" style={{ width: 200, marginBottom: 20 }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Search
          placeholder="Who are you looking for?"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
          style={{ width: 400}}
        />
        <Tooltip title=<div>Search for a Pokémon <br/>  <strong>name</strong> or <strong> number</strong></div>>
          <QuestionCircleOutlined
            style={{ fontSize: 15, color: "gray", marginLeft: 10 }}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { usePokemonContext } from "../context/PokemonContext";
import { TbPokeball } from "react-icons/tb";
import Pokelogo from "../assets/Pokelogo.png";

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Pokelogo} alt="Logo" style={{ width: 200, marginBottom: 20 }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Search
          placeholder="Who are you looking for?"
          allowClear
          enterButton={<TbPokeball style={{alignItems: "center", width: 20}}/>}
          size="large"
          onSearch={handleSearch}
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
          style={{ width: 400,  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
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

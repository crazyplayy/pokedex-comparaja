import React from "react";
import { Tag } from "antd";
import PokemonTypeColorPicker from "../utils/ColorPickerType";
import "../../styles/components/Card/PokemonType.css"

const PokemonType = ({ type }) => {
  const { backgroundColor, color } = PokemonTypeColorPicker({ type }); //Obtaines background and text color

  return ( //Displays Pokémon type aesthetically
    <Tag className="tag-container" style={{ backgroundColor, color }}>
      {type}
    </Tag>
  );
};

export default PokemonType;

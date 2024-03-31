import React from "react";
import { Tag } from "antd";
import PokemonTypeColorPicker from "../logic/ColorPickerType";

const PokemonType = ({ type }) => {
  const { backgroundColor, color } = PokemonTypeColorPicker({ type }); 

  return (
    <Tag
      style={{
        backgroundColor,
        color,
        padding: "5px 10px",
        borderRadius: "5px",
        textTransform: "capitalize",
        fontWeight: "bold",
        margin: "0px 5px",
      }}
    >
      {type}
    </Tag>
  );
};

export default PokemonType;
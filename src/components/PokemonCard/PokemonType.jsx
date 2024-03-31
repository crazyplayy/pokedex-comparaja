import React from "react";
import { Tag } from "antd";

const PokemonType = ({ type }) => {
  let backgroundColor = "";
  let color = "";

  switch (type) {
    case "poison":
      backgroundColor = "purple";
      color = "white";
      break;
    case "grass":
      backgroundColor = "lightgreen";
      color = "black";
      break;
    case "water":
      backgroundColor = "DodgerBlue";
      break;
    case "bug":
      backgroundColor = "LimeGreen";
      break;
    case "fire":
      backgroundColor = "orangered";
      color = "white";
      break;
    case "normal":
      backgroundColor = "Tomato";
      color = "white";
      break;
    case "electric":
      backgroundColor = "Gold";
      color = "black";
      break;
    case "ground":
      backgroundColor = "sandybrown";
      break;
    case "fairy":
      backgroundColor = "pink";
      color = "black";
      break;
    case "fighting":
      backgroundColor = "crimson";
      break;
    case "psychic":
      backgroundColor = "hotpink";
      break;
    case "rock":
      backgroundColor = "saddlebrown";
      break;
    case "ghost":
      backgroundColor = "slateblue";
      break;
    case "dragon":
      backgroundColor = "rebeccapurple";
      break;
    case "dark":
      backgroundColor = "dimgray";
      break;
    case "steel":
      backgroundColor = "silver";
      break;
    case "ice":
      backgroundColor = "cyan";
      break;
    case "flying":
      backgroundColor = "DarkTurquoise";
      break;
    default:
      backgroundColor = "gainsboro";
      color = "black";
      break;
  }

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
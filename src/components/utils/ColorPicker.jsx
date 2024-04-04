const PokemonBackgroundColorPicker = ({ type }) => {
  //Color picker for background color of Pokémon in PokémonCard component
  let backgroundColor = "";

  switch (type) {
    case "poison":
      backgroundColor = "plum";
      break;
    case "grass":
      backgroundColor = "lightgreen";
      break;
    case "water":
      backgroundColor = "SkyBlue";
      break;
    case "bug":
      backgroundColor = "LawnGreen";
      break;
    case "fire":
      backgroundColor = "Coral";
      break;
    case "normal":
      backgroundColor = "WhiteSmoke";
      break;
    case "electric":
      backgroundColor = "Khaki";
      break;
    case "ground":
      backgroundColor = "BurlyWood";
      break;
    case "fairy":
      backgroundColor = "pink";
      break;
    case "fighting":
      backgroundColor = "IndianRed";
      break;
    case "psychic":
      backgroundColor = "hotpink";
      break;
    case "rock":
      backgroundColor = "Sienna";
      break;
    case "ghost":
      backgroundColor = "MediumSlateBlue";
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
      break;
  }

  return backgroundColor;
};

export default PokemonBackgroundColorPicker;

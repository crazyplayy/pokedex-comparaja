const PokemonTypeColorPicker = ({ type }) => {
  let backgroundColor = '';
  let color = '';

  switch (type) {
    case 'poison':
      backgroundColor = "DarkViolet";
      color = 'white';
      break;
    case 'grass':
      backgroundColor = 'lightgreen';
      color = 'black';
      break;
    case 'water':
      backgroundColor = "SkyBlue";
      break;
    case 'bug':
      backgroundColor = "LawnGreen";
      break;
    case 'fire':
      backgroundColor = "Coral";
      color = 'white';
      break;
    case 'normal':
      backgroundColor = "WhiteSmoke";
      color = 'black';
      break;
    case 'electric':
      backgroundColor = "Khaki";
      color = 'black';
      break;
    case 'ground':
      backgroundColor = "BurlyWood";
      break;
    case 'fairy':
      backgroundColor = 'pink';
      color = 'black';
      break;
    case 'fighting':
      backgroundColor = "IndianRed";
      color = "white"
      break;
    case 'psychic':
      backgroundColor = 'hotpink';
      break;
    case 'rock':
      backgroundColor = "Sienna";
      color = "white"
      break;
    case 'ghost':
      backgroundColor = "MediumSlateBlue";
      break;
    case 'dragon':
      backgroundColor = 'rebeccapurple';
      break;
    case 'dark':
      backgroundColor = 'dimgray';
      break;
    case 'steel':
      backgroundColor = 'silver';
      break;
    case 'ice':
      backgroundColor = 'cyan';
      break;
    case 'flying':
      backgroundColor = 'DarkTurquoise';
      break;
    default:
      backgroundColor = 'gainsboro';
      color = 'black';
      break;
  }

  return { backgroundColor, color };
};

export default PokemonTypeColorPicker;

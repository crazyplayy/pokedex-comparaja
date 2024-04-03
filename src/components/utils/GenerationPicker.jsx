const GenerationPicker = ({ pageSize, offset, generation }) => {
    let url = '';
    let amount = 0;

    switch (generation) {
      case "gen-1":
        url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
        amount = 151;
        break;
      case "gen-2":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100";
        amount = 100;
        break;
      case "gen-3":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135";
        amount = 135;
        break;
      case "gen-4":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107";
        amount = 107;
        break;
      case "gen-5":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156";
        amount = 156;
        break;
      case "gen-6":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72";
        amount = 72;
        break;
      case "gen-7":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88";
        amount = 88;
        break;
      case "gen-8":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96";
        amount = 96;
        break;
      case "gen-9":
        url = "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=120";
        amount = 120;
        break;
      default:
        url = `https://pokeapi.co/api/v2/pokemon/?limit=${pageSize}&offset=${offset}`;
        break;
    }

    return { url, amount};
};

export default GenerationPicker;
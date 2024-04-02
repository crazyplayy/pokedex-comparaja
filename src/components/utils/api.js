const fetchPokemonDetails = async (searchText) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Pokémon not found. Search for a valid Pokémon name or number");
    }
  };
  
  const fetchPokemonList = async (pageSize, offset) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`);
      const data = await response.json();
      const total = Math.ceil(data.count / pageSize);
      const pokemonData = await Promise.all(
        data.results.map((pokemon) => fetchPokemonDetailsByUrl(pokemon.url))
      );
      return { pokemonData, total };
    } catch (error) {
      throw new Error("Error fetching Pokémon data. Please try again later.");
    }
  };
  
  const fetchPokemonDetailsByUrl = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching Pokémon details. Please try again later.");
    }
  };
  
  export { fetchPokemonDetails, fetchPokemonList };
  
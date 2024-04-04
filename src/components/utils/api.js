import GenerationPicker from "./GenerationPicker";

// Function to fetch details of a Pokémon by name or number
const fetchPokemonDetails = async (searchText) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Pokémon not found. Search for a valid Pokémon name or number");
    }
  };
  
  // Function to fetch a list of Pokémon based on the current page and selected generation 
  const fetchPokemonList = async (pageSize, offset, generation) => {
    const {url}= GenerationPicker({ pageSize, offset, generation }); // Chooses the correct URL based on the parameters provided
    try {
      const response = await fetch(url); //Fetch Pokémon list with required parameters
      const data = await response.json();
      const total = Math.ceil(data.count / pageSize); //Calculate the total number of pages for pagination
      const pokemonData = await Promise.all( // Fetch details of each Pokémon in the list
        data.results.map((pokemon) => fetchPokemonDetailsByUrl(pokemon.url))
      );
      return { pokemonData, total };
    } catch (error) {
      throw new Error("Error fetching Pokémon data. Please try again later.");
    }
  };
  
  // Function to fetch details of a Pokémon using its URL
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
  
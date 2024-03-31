import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const searchPokemon = (searchText) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <PokemonContext.Provider value={{ pokemonDetails, searchPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);

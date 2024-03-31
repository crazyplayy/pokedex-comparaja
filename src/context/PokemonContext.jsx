import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPokemon = (searchText) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonDetails(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(<div>Pokémon not found. <br /> Search for a valid Pokémon name or number </div>);
      });
  };

  return (
    <PokemonContext.Provider value={{ pokemonDetails, searchPokemon, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};


export const usePokemonContext = () => useContext(PokemonContext);

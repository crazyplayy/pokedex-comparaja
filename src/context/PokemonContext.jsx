import React, { createContext, useContext, useEffect, useState } from "react";

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 20;
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
        setError(
          <div>
            Pokémon not found. <br /> Search for a valid Pokémon name or number{" "}
          </div>
        );
      });
  };

  const fetchPokemonList = (offset) => {
    setLoading(true);
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
        const total = Math.ceil(data.count / pageSize);
        setTotalPages(total);

        Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((response) => response.json())
          )
        )
          .then((pokemonData) => {
            setPokemonList(pokemonData);
            setLoading(false);
            setError(null);
          })
          .catch((error) => {
            setLoading(false);
            setError(
              <div>Error fetching Pokémon data. Please try again later.</div>
            );
          });
      })
      .catch((error) => {
        setLoading(false);
        setError(
          <div>Error fetching Pokémon data. Please try again later.</div>
        );
      });
  };

  useEffect(() => {
    fetchPokemonList((currentPage - 1) * pageSize);
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addFavorite = (pokemon) => {
    setFavorites([...favorites, pokemon]);
  };

  const removeFavorite = (pokemon) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== pokemon.id);
    setFavorites(updatedFavorites);
  };

  const isFavorite = (pokemon) => {
    return favorites.some((fav) => fav.id === pokemon.id);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonDetails,
        searchPokemon,
        pokemonList,
        currentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        setError,
        loading,
        error,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);

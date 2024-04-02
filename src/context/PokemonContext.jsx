import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchPokemonDetails, fetchPokemonList } from "../components/utils/api";

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
    fetchPokemonDetails(searchText)
      .then((data) => {
        setPokemonDetails(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const fetchPokemonData = async (offset) => {
    setLoading(true);
    try {
      const { pokemonData, total } = await fetchPokemonList(pageSize, offset);
      setPokemonList(pokemonData);
      setTotalPages(total);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPokemonData((currentPage - 1) * pageSize);
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

  const goToFirstPage= () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
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
        setCurrentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        goToFirstPage,
        goToLastPage,
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

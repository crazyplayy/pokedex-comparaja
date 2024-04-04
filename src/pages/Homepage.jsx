import React from "react";
import { Row, Empty, Spin } from "antd";
import SearchBar from "../components/SearchBar";
import { usePokemonContext } from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";
import ErrorPokeball from "../assets/broken-pokeball.png";
import "../styles/pages/Homepage.css";
import "../styles/Common.css";

const Homepage = () => {
  const { pokemonDetails, loading, error } = usePokemonContext();

  return (
    <>
      <Row className="homepage-container">
        <SearchBar />
      </Row>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <span className="loading-spinner">Searching for Pokémon...</span>
        </div>
      ) : error ? (
        <div className="error-container">
          <Empty
            image={ErrorPokeball}
            description={error}
            className="empty"
          />
        </div>
      ) : (
        pokemonDetails && <PokemonCard pokemonDetails={pokemonDetails} />
      )}
    </>
  );
};

export default Homepage;

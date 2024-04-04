import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { Col, Empty, Row, Select, Spin } from "antd";
import Pagination from "../components/Pagination";
import pokedex from "../assets/pokedex-round-no-bck.png";
import ErrorPokeball from "../assets/broken-pokeball.png";
import PokedexCard from "../components/PokedexCard";
import "../styles/pages/FullPokedex.css";
import "../styles/Common.css";

const { Option } = Select;

const FullPokedex = () => {
  const {
    pokemonList,
    loading,
    error,
    selectedGeneration,
    setSelectedGeneration,
    setCurrentPage,
  } = usePokemonContext();

  const handleGenerationChange = (value) => {
    setSelectedGeneration(value);
    setCurrentPage(1);
  };

  return (
    <Row className="full-pokedex-container">
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <span className="loading-spinner">
            {selectedGeneration === "all"
              ? "Searching for the next Pokémons..."
              : "Gathering the Pokémon generation..."}
          </span>
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
        pokemonList.length > 0 && (
          <div className="pokemon-container">
            <Row gutter={[16, 16]} className="img-row">
              <img src={pokedex} alt="Logo" className="pokedex-image" />
            </Row>
            {selectedGeneration === "all" && (
              <Row gutter={[16, 16]}>
                <Pagination />
              </Row>
            )}
            <Row className="generation-row">
              <Select
                value={selectedGeneration}
                className="generation-select"
                onChange={handleGenerationChange}
              >
                <Option value="all">All</Option>
                <Option value="gen-1">Gen 1</Option>
                <Option value="gen-2">Gen 2</Option>
                <Option value="gen-3">Gen 3</Option>
                <Option value="gen-4">Gen 4</Option>
                <Option value="gen-5">Gen 5</Option>
                <Option value="gen-6">Gen 6</Option>
                <Option value="gen-7">Gen 7</Option>
                <Option value="gen-8">Gen 8</Option>
                <Option value="gen-9">Gen 9</Option>
              </Select>
            </Row>
            <Row gutter={[16, 16]} className="pokemon-row">
              {pokemonList.map((pokemon, index) => (
                <Col
                  key={index}
                  xs={24}
                  sm={12}
                  md={10}
                  lg={8}
                  xl={6}
                  className="pokemon-col"
                >
                  <PokedexCard pokemonDetails={pokemon} />
                </Col>
              ))}
            </Row>
          </div>
        )
      )}
    </Row>
  );
};

export default FullPokedex;

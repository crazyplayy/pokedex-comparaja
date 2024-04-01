import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { Col, Row, Spin } from "antd";
import Pagination from "../components/utils/Pagination";
import PokedexCard from "../components/PokedexCard";
import pokedex from "../assets/pokedex-round-no-bck.png"

const FullPokedex = () => {
  const {
    pokemonList,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = usePokemonContext();

  return (
    <div>
      {loading && <Spin />}
      {error && error}
      {pokemonList.length > 0 && (
        <>
          <Row gutter={[16, 16]} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={pokedex} alt="Logo" style={{ width: 200, marginBottom: 10, marginTop: 20 }} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onLeftClick={goToPreviousPage}
              onRightClick={goToNextPage}
            />
          </Row>
          <Row gutter={[16, 16]}>
            {pokemonList.map((pokemon, index) => (
              <Col key={index} xs={24} sm={12} md={10} lg={8} xl={6}>
                <PokedexCard
                  name={pokemon.name}
                  imageUrl={pokemon.sprites["front_default"]}
                  number={pokemon.id}
                  types={pokemon.types}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default FullPokedex;

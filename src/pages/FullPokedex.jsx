import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { Col, Empty, Row, Spin } from "antd";
import Pagination from "../components/Pagination";
import pokedex from "../assets/pokedex-round-no-bck.png";
import ErrorPokeball from "../assets/broken-pokeball.png";
import PokedexCard from "../components/PokedexCard";

const FullPokedex = () => {
  const {
    pokemonList,
    loading,
    error,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage
  } = usePokemonContext();

  return (
    <Row style={{ marginTop: "30px", justifyContent: "center" }}>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 90,
          }}
        >
          <Spin size="large" />
          <span
            style={{
              marginTop: 16,
              fontFamily: "Arial, sans-serif",
              fontSize: 16,
            }}
          >
            Searching for the next Pokémons...
          </span>
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          <Empty
            image={ErrorPokeball}
            description={error}
            style={{
              padding: 30,
              borderRadius: "5%",
              border: "1px solid #e8e8e8",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ) : (
        pokemonList.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
              <img src={pokedex} alt="Logo" style={{ width: 200 }} />
            </Row>
            <Row gutter={[16, 16]}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onLeftClick={goToPreviousPage}
                onRightClick={goToNextPage}
                onClickToFirst={goToFirstPage}
                onClickToLast={goToLastPage}
              />
            </Row>
            <Row gutter={[16, 16]}>
              {pokemonList.map((pokemon, index) => (
                <Col key={index} xs={24} sm={12} md={10} lg={8} xl={6}>
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

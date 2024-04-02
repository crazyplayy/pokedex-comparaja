import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { Col, Empty, Row, Select, Spin } from "antd";
import Pagination from "../components/Pagination";
import pokedex from "../assets/pokedex-round-no-bck.png";
import ErrorPokeball from "../assets/broken-pokeball.png";
import PokedexCard from "../components/PokedexCard";
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
            {selectedGeneration === "all" ? "Searching for the next Pokémons..." : "Gathering the Pokémon generation..."}
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
            {selectedGeneration === "all" && (
              <Row gutter={[16, 16]}>
                <Pagination />
              </Row>
            )}
            <Row style={{ marginBottom: 60 }}>
              <Select
                value={selectedGeneration}
                style={{ width: 120 }}
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

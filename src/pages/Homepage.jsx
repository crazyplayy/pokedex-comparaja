import React from "react";
import { Row, Empty, Spin } from "antd";
import SearchBar from "../components/SearchBar";
import { usePokemonContext } from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";
import ErrorPokeball from "../assets/broken-pokeball.png";

const Homepage = () => {
  const { pokemonDetails, loading, error } = usePokemonContext();

  return (
    <>
      <Row style={{ marginTop: "30px", justifyContent: "center" }}>
        <SearchBar />
      </Row>
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
          <span style={{ marginTop: 16, fontFamily: "Arial, sans-serif", fontSize: 16 }}>Searching for Pokémon...</span>
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
            style={{ padding: 30, borderRadius: "5%", border: "1px solid #e8e8e8", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
          />
        </div>
      ) : (
        pokemonDetails && <PokemonCard pokemonDetails={pokemonDetails} />
      )}
    </>
  );
};

export default Homepage;

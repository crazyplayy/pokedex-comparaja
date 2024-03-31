import React from "react";
import { Row } from "antd";
import NavBar from "../components/NavigationBar";
import SearchBar from "../components/SearchBar";
import { usePokemonContext } from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";

const Homepage = () => {
  const { pokemonDetails } = usePokemonContext();

  return (
    <>
      <NavBar />
      <Row style={{ marginTop: "20px", justifyContent: "center" }}>
        <SearchBar />
      </Row>
      {pokemonDetails && <PokemonCard pokemonDetails={pokemonDetails} />}
    </>
  );
};

export default Homepage;

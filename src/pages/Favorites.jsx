import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { Col, Empty, Row, Spin } from "antd";
import PokedexCard from "../components/PokedexCard";
import ErrorPokeball from "../assets/broken-pokeball.png";
import "../styles/pages/Favorites.css";
import "../styles/Common.css";


const Favorites = () => {
  const { favorites, loading, error } = usePokemonContext();

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="favorites-container"
    >
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
          <span className="loading-spinner">
            Gathering your favorite Pokémons!
          </span>
        </div>
      ) : favorites.length > 0 ? (
        <div className="favorites-content">
          <Row gutter={[16, 16]} className="favorite-pokemon-row">
            {favorites.map((pokemon, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={10}
                lg={8}
                xl={6}
                className="favorite-pokemon-col"
              >
                <PokedexCard pokemonDetails={pokemon} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Empty
          image={ErrorPokeball}
          description={"You have no favorite Pokémons"}
          className="no-favorites"
        />
      )}
    </Row>
  );
};

export default Favorites;

import React from "react";
import { usePokemonContext } from "../context/PokemonContext";
import { Col, Empty, Row, Spin } from "antd";
import PokedexCard from "../components/PokedexCard";
import ErrorPokeball from "../assets/broken-pokeball.png";

const Favorites = () => {
  const { favorites, loading, error } = usePokemonContext();

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ marginTop: "30px" }}
    >
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
            Gathering your favorite Pokémons!
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
      ) : favorites.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Row gutter={[16, 16]} style={{marginTop: 50, padding: 10}}>
            {favorites.map((pokemon, index) => (
              <Col key={index} xs={24} sm={12} md={10} lg={8} xl={6} style={{ minWidth: '300px' }}>
                <PokedexCard pokemonDetails={pokemon} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Empty
          image={ErrorPokeball}
          description={"You have no favorite Pokémons"}
          style={{
            marginTop: "15%",
          }}
        />
      )}
    </Row>
  );
};

export default Favorites;

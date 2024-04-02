import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "../styles/PokedexCard.css";
import PokemonType from "./Card/PokemonType";
import GenericInfo from "./Card/GenericInfo";
import Stats from "./Card/Stats";

const PokedexCard = ({ pokemonDetails }) => {
  const formattedNumber = String(pokemonDetails.id).padStart(3, "0");

  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          <Card
            style={{
              position: "relative",
              textAlign: "center",
              marginBottom: "80px",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={pokemonDetails.sprites["front_default"]}
                alt={pokemonDetails.name}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div>
                <Typography.Text
                  style={{
                    textTransform: "capitalize",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {pokemonDetails.name}
                </Typography.Text>
              </div>
              <div>
                <Typography.Text
                  style={{ color: "Darkgrey", fontSize: "14px" }}
                >
                  # {formattedNumber}
                </Typography.Text>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              {pokemonDetails.types.map((el) => (
                <PokemonType key={el.type.name} type={el.type.name} />
              ))}
            </div>
          </Card>
        </div>
        <div className="back">
          <Card
            style={{
              position: "relative",
              textAlign: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {
                pokemonDetails.sprites["back_default"] && (
                  <img
                    src={pokemonDetails.sprites["back_default"]}
                    alt={pokemonDetails.name}
                    style={{ width: "100%" }}
                  />
                )}
            </div>
            <Row style={{ marginTop: 20 }}>
              <Col span={12}>
                <div style={{ marginTop: "10px" }}>
                  <GenericInfo
                    height={pokemonDetails.height}
                    weight={pokemonDetails.weight}
                    column={1}
                    layout={"vertical"}
                  />
                </div>
              </Col>
              <Col span={12}>
                <Stats data={pokemonDetails.stats} />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PokedexCard;

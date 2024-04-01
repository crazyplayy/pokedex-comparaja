import React from "react";
import { Card, Row, Col } from "antd";
import AvatarInfo from "./PokemonCard/AvatarInfo";
import GenericInfo from "./PokemonCard/GenericInfo";
import Stats from "./PokemonCard/Stats";
import PokemonType from "./PokemonCard/PokemonType";
import "../styles/PokemonCard.css"

const PokemonCard = ({ pokemonDetails }) => {
  return (
    <Card className="card-container">
      <Row gutter={16}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AvatarInfo
            name={pokemonDetails.name}
            imageUrl={pokemonDetails.sprites["front_default"]}
            shinyUrl={pokemonDetails.sprites["front_shiny"]}
            number={pokemonDetails.id}
            type={pokemonDetails.types[0].type.name}
          />
        </Col>
        <Col
          span={12}
          style={{
            borderLeft: "1px solid #e8e8e8",
            paddingLeft: "30px",
            paddingRight: "10px",
          }}
        >
        <div style={{ display: 'flex', justifyContent: 'center', borderBottom: "1px solid #e8e8e8", paddingBottom: 12 , marginBottom: 16, marginTop: 4 }}>
          {pokemonDetails.types.map((el) => (
            <PokemonType key={el.type.name} type={el.type.name} />
          ))}
        </div>
          <div style={{  }}></div>
          <GenericInfo
            height={pokemonDetails.height}
            weight={pokemonDetails.weight}
            column={2}
            layout={"horizontal"}
          />
          <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 12, marginTop: 12 }}>
            <Stats data={pokemonDetails.stats} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default PokemonCard;

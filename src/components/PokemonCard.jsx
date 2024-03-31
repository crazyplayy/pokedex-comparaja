import React from "react";
import { Card, Row, Col } from "antd";
import AvatarInfo from "./PokemonCard/AvatarInfo";
import GenericInfo from "./PokemonCard/GenericInfo";
import Stats from "./PokemonCard/Stats";
import Evolutions from "./PokemonCard/Evolutions";
import PokemonType from "./PokemonCard/PokemonType";

const PokemonCard = ({ pokemonDetails }) => {
  return (
    <Card style={{ maxWidth: "65%", margin: "auto", marginTop: 20 }}>
      <Row gutter={16}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AvatarInfo
            name={pokemonDetails.name}
            imageUrl={pokemonDetails.sprites["front_default"]}
            shinyUrl={pokemonDetails.sprites["front_shiny"]}
            number={pokemonDetails.id}
          />
        </Col>
        <Col
          span={12}
          style={{
            borderLeft: "1px solid #e8e8e8",
            paddingLeft: "20px",
            paddingRight: "10px",
          }}
        >
        <div style={{ display: 'flex', justifyContent: 'center', borderBottom: "1px solid #e8e8e8", paddingBottom: 12 , marginBottom: 16 }}>
          {pokemonDetails.types.map((el) => (
            <PokemonType key={el.type.name} type={el.type.name} />
          ))}
        </div>
          <div style={{  }}></div>
          <GenericInfo
            height={pokemonDetails.height}
            weight={pokemonDetails.weight}
          />
          <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 12, marginTop: 12 }}>
            <Stats data={pokemonDetails.stats} />
          </div>
          {/* <Evolutions data={pokemonDetails.species.url} /> */}
        </Col>
      </Row>
    </Card>
  );
};

export default PokemonCard;

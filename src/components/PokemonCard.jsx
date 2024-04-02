import React from "react";
import { Card, Row, Col, Button } from "antd";
import AvatarInfo from "./Card/AvatarInfo";
import GenericInfo from "./Card/GenericInfo";
import Stats from "./Card/Stats";
import PokemonType from "./Card/PokemonType";
import "../styles/PokemonCard.css"
import { usePokemonContext } from "../context/PokemonContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const PokemonCard = ({ pokemonDetails }) => {
  const { addFavorite, removeFavorite, isFavorite } = usePokemonContext();

  const handleFavoriteClick = () => {
    if (isFavorite(pokemonDetails)) {
      removeFavorite(pokemonDetails);
    } else {
      addFavorite(pokemonDetails);
    }
  };
  return (
    <Card className="card-container">
    <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
        }}
      >
        <Button
          onClick={handleFavoriteClick}
          type="text"
          icon={
            isFavorite(pokemonDetails) ? (
              <MdFavorite style={{ color: "red", fontSize: "20px" }} />
            ) : (
              <MdFavoriteBorder style={{fontSize: "20px"}} />
            )
          }
        />
      </div>
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
            femaleUrl={pokemonDetails.sprites["front_female"]}
            shinyUrl={pokemonDetails.sprites["front_shiny"]}
            femaleShinyUrl={pokemonDetails.sprites["front_shiny_female"]}
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

import React from "react";
import { Card, Row, Col, Button } from "antd";
import AvatarInfo from "./Card/AvatarInfo";
import GenericInfo from "./Card/GenericInfo";
import Stats from "./Card/Stats";
import PokemonType from "./Card/PokemonType";
import { usePokemonContext } from "../context/PokemonContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "../styles/components/PokemonCard.css";

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
      <div className="favorite-button">
        <Button
          onClick={handleFavoriteClick}
          type="text"
          icon={
            isFavorite(pokemonDetails) ? (
              <MdFavorite className="favorite-color" />
            ) : (
              <MdFavoriteBorder className="favorite-icon" />
            )
          }
        />
      </div>
      <Row gutter={16}>
        <Col span={12} className="card-col-left">
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
        <Col span={12} className="card-col-right">
          <div className="type-container">
            {pokemonDetails.types.map((el) => (
              <PokemonType key={el.type.name} type={el.type.name} />
            ))}
          </div>
          <GenericInfo
            height={pokemonDetails.height}
            weight={pokemonDetails.weight}
            column={2}
            layout={"horizontal"}
          />
          <div className="stats-container">
            <Stats data={pokemonDetails.stats} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default PokemonCard;

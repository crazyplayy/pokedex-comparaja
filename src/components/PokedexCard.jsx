import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import PokemonType from "./Card/PokemonType";
import GenericInfo from "./Card/GenericInfo";
import Stats from "./Card/Stats";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { usePokemonContext } from "../context/PokemonContext";
import "../styles/components/PokedexCard.css";

const PokedexCard = ({ pokemonDetails }) => {
  const formattedNumber = String(pokemonDetails.id).padStart(3, "0");
  const { addFavorite, removeFavorite, isFavorite } = usePokemonContext();

  const handleFavoriteClick = () => {
    if (isFavorite(pokemonDetails)) {
      removeFavorite(pokemonDetails);
    } else {
      addFavorite(pokemonDetails);
    }
  };

  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          <Card className="pokemon-card-front">
            <div className="favorite-button-front">
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
            <div className="image-container">
              <img
                src={pokemonDetails.sprites["front_default"]}
                alt={pokemonDetails.name}
                className="img-width"
              />
            </div>
            <div className="margin-at-top">
              <div> 
                <Typography.Text className="pokemon-name">{pokemonDetails.name}</Typography.Text>
              </div>
              <div >
                <Typography.Text className="pokemon-number"># {formattedNumber}</Typography.Text>
              </div>
            </div>
            <div className="margin-at-top">
              {pokemonDetails.types.map((el) => (
                <PokemonType key={el.type.name} type={el.type.name} />
              ))}
            </div>
          </Card>
        </div>
        <div className="back">
          <Card className="pokemon-card-back">
            <div className="favorite-button-back">
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
            <div className="image-container">
              {pokemonDetails.sprites["back_default"] && (
                <img
                  src={pokemonDetails.sprites["back_default"]}
                  alt={pokemonDetails.name}
                  className="img-width"
                />
              )}
            </div>
            <Row className="margin-at-top-increase">
              <Col span={12}>
                <div className="margin-at-top">
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

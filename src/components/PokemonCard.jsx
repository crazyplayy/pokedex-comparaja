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
    /*************************************************
    *                  Improvements                  *
    *************************************************/
    /* Here you can instead of having this Card, you can have a div to change the behavior of the card's layout
    (when we change the screen size)
      -> add some styles like display: flex or display: grid (and play with it =) ) or simply add your styles (border-radius, etc.)
      -> your Row can be a div with display: flex and add a @media (max-width: 1280px) { flex-direction: column; align-items: center;}
    */
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
        <Col span={12} className="card-col-left"> {/* Column for left side of the card */}
          <AvatarInfo //Displays Pokémon image, name, and number
            name={pokemonDetails.name}
            imageUrl={pokemonDetails.sprites["front_default"]}
            femaleUrl={pokemonDetails.sprites["front_female"]}
            shinyUrl={pokemonDetails.sprites["front_shiny"]}
            femaleShinyUrl={pokemonDetails.sprites["front_shiny_female"]}
            number={pokemonDetails.id}
            type={pokemonDetails.types[0].type.name}
          />
        </Col>
        <Col span={12} className="card-col-right"> {/* Column for right side of the card */}
          <div className="type-container"> {/* Displays Pokémon Types*/}
            {pokemonDetails.types.map((el) => (
              <PokemonType key={el.type.name} type={el.type.name} />
            ))}
          </div>
          <GenericInfo //Displays Pokémon weight and height
            height={pokemonDetails.height}
            weight={pokemonDetails.weight}
            column={2}
            layout={"horizontal"}
          />
          <div className="stats-container"> {/* Displays Pokémon Base Stats */}
            <Stats data={pokemonDetails.stats} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default PokemonCard;

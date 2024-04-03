import React from "react";
import { Button, Card, Typography } from "antd";
import PokemonType from "./PokemonCard/PokemonType";
import { usePokemonContext } from "../context/PokemonContext";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

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
    <Card
      style={{
        position: "relative",
        textAlign: "center",
        marginBottom: "30px",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
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
          <Typography.Text style={{ color: "Darkgrey", fontSize: "14px" }}>
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
  );
};

export default PokedexCard;

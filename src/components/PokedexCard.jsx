import React from "react";
import { Card, Typography } from "antd";
import PokemonType from "./PokemonCard/PokemonType";
// import PokemonBackgroundColorPicker from "./utils/ColorPicker";

const PokedexCard = ({ imageUrl, name, number, types }) => {
  const formattedNumber = String(number).padStart(3, "0");
//   const type = types[0].type.name;
//   const backgroundColor = PokemonBackgroundColorPicker({ type });

  return (
    <Card
      style={{
        position: "relative",
        textAlign: "center",
        marginBottom: "30px",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        // backgroundColor: backgroundColor
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
        <img src={imageUrl} alt={name} style={{ width: "100%" }} />
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
            {name}
          </Typography.Text>
        </div>
        <div>
          <Typography.Text style={{ color: "Darkgrey", fontSize: "14px" }}>
            # {formattedNumber}
          </Typography.Text>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        {types.map((el) => (
          <PokemonType key={el.type.name} type={el.type.name} />
        ))}
      </div>
    </Card>
  );
};

export default PokedexCard;

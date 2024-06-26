import React, { useState } from "react";
import { Typography, Row, Col, Button } from "antd";
import { BsStars } from "react-icons/bs";
import { GiMale, GiFemale } from "react-icons/gi";
import PokemonBackgroundColorPicker from "../utils/ColorPicker";
import "../../styles/components/Card/AvatarInfo.css";
import "../../styles/Common.css";

const { Title } = Typography;

const AvatarInfo = ({
  imageUrl,
  shinyUrl,
  femaleUrl,
  femaleShinyUrl,
  name,
  number,
  type,
}) => {
  const formattedNumber = String(number).padStart(3, "0"); //Add zeros to values between 1-99
  const [isShiny, setIsShiny] = useState(false);
  const [isMale, setIsMale] = useState(true);

  const backgroundColor = PokemonBackgroundColorPicker({ type });

  const handleClickShiny = () => {
    setIsShiny((prevState) => !prevState);
  };

  const handleClickGender = () => {
    setIsMale((prevState) => !prevState);
  };

  return (
    <Row>
      <Col>
        <div className="avatar-container">
          <div className="avatar-background" style={{ backgroundColor }}>
            {/* background color equal to first Pokémon type */}
            <img
              src={
                //Selects the image url based on the selected gender and shiny version
                isShiny
                  ? isMale
                    ? shinyUrl
                    : femaleShinyUrl
                  : isMale
                  ? imageUrl
                  : femaleUrl
              }
              alt={name}
              className="avatar-image"
            />
            <Button //Shiny Button
              shape="round"
              className="shiny-button"
              style={{ backgroundColor: isShiny ? "#0066ff" : "#fff" }}
              onClick={handleClickShiny}
            >
              <BsStars style={{ color: isShiny ? "#ffff1a" : "#0066ff" }} />
            </Button>
            {femaleUrl && ( //Gender button only displayed if a female version is provided
              <Button
                shape="round"
                className="gender-button"
                onClick={handleClickGender}
              >
                {isMale ? <GiMale /> : <GiFemale />}
              </Button>
            )}
          </div>
          <div className="title-align">
            {/* Pokémon name */}
            <Title level={2} className="avatar-name">
              {name}
            </Title>
            {/* Pokémon number */}
            <Title level={5} className="avatar-number">
              # {formattedNumber}
            </Title>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AvatarInfo;

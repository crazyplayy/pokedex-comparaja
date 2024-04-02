import React, { useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { BsStars } from "react-icons/bs";
import { GiMale, GiFemale } from "react-icons/gi"; // Import icons for male and female
import PokemonBackgroundColorPicker from '../utils/ColorPicker';

const { Title } = Typography;

const AvatarInfo = ({ imageUrl, shinyUrl, femaleUrl, femaleShinyUrl, name, number, type }) => {
  const formattedNumber = String(number).padStart(3, '0');
  const [isShiny, setIsShiny] = useState(false);
  const [isMale, setIsMale] = useState(true); // State to track gender, default is male

  const backgroundColor = PokemonBackgroundColorPicker({ type }); 

  const handleClickShiny = () => {
    setIsShiny((prevState) => !prevState);
  };

  const handleClickGender = () => {
    setIsMale((prevState) => !prevState);
  };

  return (
    <Row justify="center">
      <Col>
        <div style={{ position: 'relative', textAlign: 'center', marginTop: 10 }}>
          <div style={{ backgroundColor: backgroundColor, border: '1px solid #A9A9A9', borderRadius:"25%", position: 'relative', display: 'inline-block' }}>
            <img src={isShiny ? (isMale ? shinyUrl : femaleShinyUrl) : (isMale ? imageUrl : femaleUrl)} alt={name} style={{ width: '150px'}} />
            <Button shape="round" style={{ backgroundColor: isShiny ? '#0066ff' : '#fff', position: 'absolute', top: 0, right: -55, zIndex: 1, boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }} onClick={handleClickShiny}>
              <BsStars style={{ color: isShiny ? '#ffff1a' : '#0066ff' }} />
            </Button>
            {femaleUrl && ( // Check if femaleUrl exists
              <Button shape="round" style={{ backgroundColor: '#fff', position: 'absolute', top: 40, right: -55, zIndex: 1, boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }} onClick={handleClickGender}>
                {isMale ? <GiMale /> : <GiFemale />} {/* Display male or female icon based on isMale state */}
              </Button>
            )}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Title level={2} style={{ textTransform: 'capitalize'}}>{name}</Title>
            <Title level={5} style={{color: 'Darkgrey'}} ># {formattedNumber}</Title>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AvatarInfo;

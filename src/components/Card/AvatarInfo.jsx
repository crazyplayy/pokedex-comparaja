import React, { useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { BsStars } from "react-icons/bs";
import PokemonBackgroundColorPicker from '../utils/ColorPicker';

const { Title } = Typography;

const AvatarInfo = ({ imageUrl, shinyUrl, name, number, type }) => {
  const formattedNumber = String(number).padStart(3, '0');
  const [isShiny, setIsShiny] = useState(false);

  const backgroundColor = PokemonBackgroundColorPicker({ type }); 

  const handleClick = () => {
    setIsShiny((prevState) => !prevState);
  };

  return (
    <Row justify="center">
      <Col>
        <div style={{ position: 'relative', textAlign: 'center',marginTop: 10 }}>
          <div style={{ backgroundColor: backgroundColor, border: '1px solid #A9A9A9', borderRadius:"25%", position: 'relative', display: 'inline-block' }}>
            <img src={isShiny ? shinyUrl : imageUrl} alt={name} style={{ width: '150px'}} />
            <Button shape="round" style={{ backgroundColor: isShiny ? '#0066ff' : '#fff', position: 'absolute', top: 0, right: -55, zIndex: 1,  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }} onClick={handleClick}>
            <BsStars style={{ color: isShiny ? '#ffff1a' : '#0066ff' }} />
            </Button>
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

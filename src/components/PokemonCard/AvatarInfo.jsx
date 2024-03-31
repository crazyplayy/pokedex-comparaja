import React, { useState } from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { BsStars } from "react-icons/bs";

const { Title } = Typography;

const AvatarInfo = ({ imageUrl, shinyUrl, name, number }) => {
  const formattedNumber = String(number).padStart(3, '0');
  const [isShiny, setIsShiny] = useState(false);

  const handleClick = () => {
    setIsShiny((prevState) => !prevState);
  };

  return (
    <Row justify="center">
      <Col>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ border: '2px solid #000', position: 'relative', display: 'inline-block' }}>
            <img src={isShiny ? shinyUrl : imageUrl} alt={name} style={{ width: '100%' }} />
            <Button shape="round" style={{ backgroundColor: isShiny ? '#0066ff' : '#fff', position: 'absolute', top: 0, right: -55, zIndex: 1 }} onClick={handleClick}>
            <BsStars style={{ color: isShiny ? '#ffff1a' : '#0066ff' }} />
            </Button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Title level={3} style={{ textTransform: 'capitalize', marginBottom: 0 }}>{name}</Title>
            <Title level={5} style={{ marginBottom: 16 }}># {formattedNumber}</Title>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AvatarInfo;

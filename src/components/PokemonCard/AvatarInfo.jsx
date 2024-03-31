import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

const AvatarInfo = ({ imageUrl, name, number }) => {
  const formattedNumber = String(number).padStart(3, '0');

  return (
    <Row align="middle" gutter={16}>
      <Col>
        <div style={{ border: '2px solid #000'}}>
          <img src={imageUrl} alt={name} style={{ width: '100%' }} />
        </div>
        <Title level={3} style={{ textAlign: 'center', textTransform: 'capitalize' }}>{name}</Title>
        <Title level={5} style={{ textAlign: 'center'}}># {formattedNumber}</Title>

      </Col>
    </Row>
  );
};

export default AvatarInfo;

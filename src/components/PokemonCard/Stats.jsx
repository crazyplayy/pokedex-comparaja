import React from 'react';
import { Progress, Row, Col, Typography } from 'antd';

const { Text } = Typography;

// Function to map stat names to their abbreviations
const mapStatName = (name) => {
  switch (name) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'ATK';
    case 'defense':
      return 'DEF';
    case 'special-attack':
      return 'SpA';
    case 'special-defense':
      return 'SpD';
    case 'speed':
      return 'SPD';
    default:
      return name;
  }
};

const Stats = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Row key={index} style={{ marginBottom: 8 }}>
          <Col span={8}>
            <Text strong>{mapStatName(item.stat.name)}:</Text>
          </Col>
          <Col span={16}>
            <Progress percent={(item.base_stat / 255) * 100} format={() => item.base_stat} status="normal" strokeColor="#1890ff" />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Stats;

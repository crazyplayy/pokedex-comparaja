import React, { useState } from 'react';
import { Row, Col, Typography, Avatar, Divider } from 'antd';
import { ArrowForwardOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Evolutions = ({ data }) => {
  const [evolutionData, setEvolutionData] = useState([]);
  // TODO: Fetch evolution data
  return (
    <div>
      {data.map((item, index) => (
        <Row key={index} align="middle" gutter={16}>
          <Col>
            <Avatar size={64} src={item.imageUrl} alt={item.name} />
          </Col>
          <Col>
            <Text>{item.name}</Text>
          </Col>
          {index !== data.length - 1 && (
            <Col>
              {/* <ArrowForwardOutlined /> */}
            </Col>
          )}
        </Row>
      ))}
      <Divider />
    </div>
  );
};

export default Evolutions;

import React from "react";
import { Progress, Row, Col, Typography } from "antd";
import "../../styles/components/Card/Stats.css"

const { Text } = Typography;

// map base stat name to its abbreviation
const mapStatName = (name) => {
  switch (name) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SpA";
    case "special-defense":
      return "SpD";
    case "speed":
      return "SPD";
    default:
      return name;
  }
};

const Stats = ({ data }) => {
  return (
    <>
      {data.map((item, index) => ( //Displays for each stat a row with the stat name and a progress bar (0 - 255)
        <Row key={index} className="margin-at-bottom">
        <Col span={8} >
            <Text strong>{mapStatName(item.stat.name)}:</Text>
          </Col>
          <Col span={16}>
            <Progress
              percent={(item.base_stat / 255) * 100}
              format={() => item.base_stat}
              status="normal"
              strokeColor="#1890ff"
              
            />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Stats;

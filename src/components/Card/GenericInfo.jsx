import React from "react";
import { Typography, Descriptions } from "antd";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";
import "../../styles/components/Card/GenericInfo.css";

const { Text } = Typography;

const GenericInfo = ({ height, weight, column, layout }) => {
  return (
    <Descriptions bordered layout={layout} column={column} size={"small"}>
      <Descriptions.Item label={<GiBodyHeight />} className="generic-info-item">
      {/* Displaying height in meters */}
        <Text className="generic-info-text">{`${height / 10} m`}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<FaWeightHanging />} className="generic-info-item">
        {/* Displaying weight in kilograms */}
        <Text className="generic-info-text">{`${weight / 10} kg`}</Text>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default GenericInfo;

import React from "react";
import { Typography, Descriptions } from "antd";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";

const { Text } = Typography;

const GenericInfo = ({ height, weight }) => {
  return (
    <Descriptions bordered column={2} size={"small"}  >
      <Descriptions.Item label={<GiBodyHeight />} >
        <Text>{`${height / 10} m`}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<FaWeightHanging />} >
        <Text >{`${weight / 10} kg`}</Text>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default GenericInfo;

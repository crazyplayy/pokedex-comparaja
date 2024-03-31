import React from "react";
import { Typography, Descriptions } from "antd";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";

const { Text } = Typography;

const GenericInfo = ({ height, weight }) => {
  return (
    <Descriptions bordered column={2} size={"small"} style={{ textAlign: "center" }}>
      <Descriptions.Item label={<GiBodyHeight  />} style={{ verticalAlign: "middle" }}>
        <Text style={{ display: "inline-block", verticalAlign: "middle" }}>{`${height / 10} m`}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<FaWeightHanging style={{ verticalAlign: "middle"}} />} >
        <Text style={{ display: "inline-block", verticalAlign: "middle" }}>{`${weight / 10} kg`}</Text>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default GenericInfo;

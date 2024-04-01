import React from "react";
import { Typography, Descriptions } from "antd";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";

const { Text } = Typography;

const GenericInfo = ({ height, weight, column, layout }) => {
  return (
    <Descriptions bordered layout={layout} column={column} size={"small"} style={{ textAlign: "center" }}>
      <Descriptions.Item label={<GiBodyHeight  />} style={{ textAlign: "center" }}>
        <Text style={{ display: "inline-block", verticalAlign: "middle" }}>{`${height / 10} m`}</Text>
      </Descriptions.Item>
      <Descriptions.Item label={<FaWeightHanging />} style={{  textAlign: "center"}} >
        <Text style={{ display: "inline-block", verticalAlign: "middle" }}>{`${weight / 10} kg`}</Text>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default GenericInfo;

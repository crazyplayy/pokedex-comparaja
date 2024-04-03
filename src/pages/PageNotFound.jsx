import React from "react";
import { Row, Empty, Button, Col } from "antd";
import brokenPokeball from "../assets/broken-pokeball-transparent-background.jpg";
import { TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";

const PageNotFound = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ height: "80vh" }}>
      <Col span={8} align="middle">
        <Title level={1} style={{ color: "black" }}>
          ERROR 404
        </Title>
        <Empty
          image={brokenPokeball}
          description={
            <p style={{ fontSize: 18 }}>
              The page you are looking for was not found.
            </p>
          }
        />
        <Link to="/">
          <Button
            type="primary"
            shape="round"
            icon={<TbPokeball />}
            style={{ display: "flex", alignItems: "center" }}
          >
            Back to Pokédex
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
export default PageNotFound;

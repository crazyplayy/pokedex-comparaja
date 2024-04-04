import React from "react";
import { Row, Empty, Button, Col } from "antd";
import brokenPokeball from "../assets/broken-pokeball-transparent-background.jpg";
import { TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import "../styles/pages/PageNotFound.css";

const PageNotFound = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="page-not-found-container"
    >
      <Col span={8} align="middle">
        <Title level={1} className="page-not-found-title">
          ERROR 404
        </Title>
        <Empty
          image={brokenPokeball}
          description={
            <p className="page-not-found-description">
              The page you are looking for was not found.
            </p>
          }
        />
        <Link to="/">
          <Button
            type="primary"
            shape="round"
            icon={<TbPokeball />}
            className="page-not-found-button"
          >
            Back to Pokédex
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
export default PageNotFound;

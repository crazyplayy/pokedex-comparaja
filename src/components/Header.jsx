import React from "react";
import { Link } from "react-router-dom";
import { Row } from "antd";
import "../styles/Header.css";

const Header = () => {
  return (
    <Row className="header-row">
      <Link to="/complete-dex" className="header-link">
        Explore CompleteDex
      </Link>
      <Link to="/" className="header-link">
        Pokédex
      </Link>
      <Link to="/favorites" className="header-link">
        Favorites
      </Link>
    </Row>
  );
};

export default Header;
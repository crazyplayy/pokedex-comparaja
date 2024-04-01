import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "../styles/Header.css";
import about from "../assets/about.png"

const Header = () => {
  const [selected, setSelected] = useState(1);

  const handleMenuClick = (e) => {
    setSelected(e.key);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{justifyContent: "space-between"}}
      selectedKeys={[selected.toString()]}
      onClick={handleMenuClick}
    >
      <Menu.Item key="0" style={{marginLeft: "-15%"}}>
        <Link to="/complete-dex">Explore CompleteDex</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/">Pokédex</Link>
      </Menu.Item>
      <Menu.Item key="2" >
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
      <Menu.Item key="3" style={{marginRight: "2%"}}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;

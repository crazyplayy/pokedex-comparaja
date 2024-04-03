import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import "../styles/Header.css";

const Header = () => {
  const [selected, setSelected] = useState(1);
  const location = useLocation();

  const handleMenuClick = (e) => {
    setSelected(e.key);
  };

  React.useEffect(() => {
    if (location.pathname === "/complete-dex") setSelected(0);
    else if (location.pathname === "/") setSelected(1);
    else if (location.pathname === "/favorites") setSelected(2);
    else if (location.pathname === "/about") setSelected(3);
  }, [location]);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ justifyContent: "space-between" }}
      selectedKeys={[selected.toString()]}
      onClick={handleMenuClick}
    >
      <Menu.Item key="0" style={{ marginLeft: "-15%" }}>
        <Link to="/complete-dex">Explore CompleteDex</Link>
      </Menu.Item>
      <Menu.Item key="1">
       <Link to="/">Pokédex</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
      <Menu.Item key="3" style={{ marginRight: "2%" }}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
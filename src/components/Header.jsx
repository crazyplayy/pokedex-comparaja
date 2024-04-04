import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import "../styles/components/Header.css";

const Header = () => {
  const [selected, setSelected] = useState(1); // manages selected menu item
  const location = useLocation(); // Accessing the current location on router

  const handleMenuClick = (e) => {
    setSelected(e.key);
  };

  // Updates selected menu item based on current location
  React.useEffect(() => {
    if (location.pathname === "/complete-dex") setSelected(0);
    else if (location.pathname === "/") setSelected(1);
    else if (location.pathname === "/favorites") setSelected(2);
    else if (location.pathname === "/about") setSelected(3);
  }, [location]);

  const menuItems = [
    {
      key: "0",
      label: <Link to="/complete-dex">Explore CompleteDex</Link>,
      style: { marginLeft: "-15%" },
    },
    {
      key: "1",
      label: <Link to="/">Pokédex</Link>,
    },
    {
      key: "2",
      label: <Link to="/favorites">Favorites</Link>,
    },
    {
      key: "3",
      label: <Link to="/about">About</Link>,
      style: { marginRight: "2%" },
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ justifyContent: "space-between" }}
      selectedKeys={[selected.toString()]}
      onClick={handleMenuClick}
      items={menuItems}
    />
  );
};

export default Header;

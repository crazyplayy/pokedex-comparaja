import React from "react";
import { Menu } from "antd";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Menu theme="dark" mode="horizontal" style={{justifyContent: "center", alignItems: "center", height: "35px", position: "fixed", bottom: 0, width: '100%', padding: -10}}>
      <Menu.Item key="1">
        <p >
          Made by <a href="https://github.com/crazyplayy">crazyplayy</a> |
          Copyright © {year}
        </p>
      </Menu.Item>
    </Menu>
  );
};

export default Footer;

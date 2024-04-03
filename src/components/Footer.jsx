import React from "react";
import { Menu } from "antd";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerItems = [
    {
      key: "1",
      label: (
        <p>
          Made by <a href="https://github.com/crazyplayy">crazyplayy</a> |
          Copyright © {year}
        </p>
      ),
    },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "35px",
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: -10,
      }}
      items={footerItems}
    />
  );
};

export default Footer;

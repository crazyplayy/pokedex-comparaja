import React from "react";
import { Menu } from "antd";
import "../styles/components/Footer.css"

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
      className="footer-menu"
      items={footerItems}
    />
  );
};

export default Footer;

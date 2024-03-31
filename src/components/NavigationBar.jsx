import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavBar = () => {
  const handleClick = (e) => {
    console.log('Clicked item:', e.key);
    // You can add logic here to handle navigation based on the clicked item
  };

  const menuItems = [
    { key: '1', label: 'Explore NationalDex' },
    { key: '2', label: 'Pokedex' },
    { key: '3', label: 'Favorites', position: 'right' },
  ];

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={handleClick} items={menuItems}>
      </Menu>
    </Header>
  );
};

export default NavBar;

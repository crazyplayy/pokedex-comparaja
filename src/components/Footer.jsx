import React from 'react';

const Footer = ({ selected }) => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
      <p style={{ fontStyle: "" }}>Copyright © {year} - crazyplayy</p>
    </footer>
  );
};

export default Footer;
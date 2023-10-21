import React from 'react';

function Footer() {
  return (
    <>
      <hr />
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy;&nbsp; SaheliConnect❤️  &nbsp;|| 2023 &nbsp;||&nbsp; connect us</p>
      </div>
    </footer>
    </>
  );
}

const footerStyle = {
  backgroundColor: 'rgb(18,18,20)',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  fontSize:"20px",
};

export default Footer;


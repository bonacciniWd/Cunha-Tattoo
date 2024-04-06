import React from 'react';
import './Footer.css'; // Importe o arquivo de estilos para o Footer
import Bonaccini from '../components/assets/logo-vr.svg'

const Footer = () => {
  return (
    
    <footer className="footer">
     
      <div className="logo-1">
       <a href="https://vrz-studio.tech" target="_blank" rel="noopener noreferrer">
         <img src={Bonaccini} alt="Logo" />
       </a>
      </div>
      <p className="copyright">© 2024 Gabriel da Cunha Tattoo & Piercing</p>
    </footer>
  );
};

export default Footer;

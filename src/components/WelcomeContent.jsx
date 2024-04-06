import React from 'react';
import './WelcomeContent.css';
import Gabriel from '../components/assets/gabriel.png';

const WelcomeContent = () => {
  return (
    <div className="content">
      <h1 className='h1'>BEM VINDO!</h1>
      <img className='gabriel' src={Gabriel}/>
      <p className='p'>Sou Gabriel da Cunha, seu tatuador e piercer dedicado a transformar suas ideias em obras de arte permanentes. Com minha paixão pela arte da tatuagem e anos de experiência, estou aqui para oferecer a você uma experiência personalizada e de alta qualidade.</p>
      <p className='p'>No meu estúdio, cada tatuagem e piercing é cuidadosamente criado para refletir sua individualidade e estilo!</p>
      <p className='p-2'>Meus Serviços</p>
    </div>
  );
}

export default WelcomeContent;
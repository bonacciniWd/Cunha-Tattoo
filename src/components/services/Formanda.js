import React, { useState, useEffect } from 'react';
import './Convidada.css';
import videoUrl from '../assets/bg-video.mp4';
import Imagem from '../assets/Imagem2.jpg';
import ContactButton from './ContactButton';

import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';




const Formanda = () => {

  const images = [f1, f2, f3, f4]; // Lista de URLs das imagens
  const [currentIndex, setCurrentIndex] = useState(0); // Não estamos usando currentIndex

useEffect(() => {
  // Função para atualizar o índice da imagem a cada intervalo de tempo
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000); // Troca de imagem a cada 3 segundos

  return () => {
    clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  };
}, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <div className="main">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="new-cont">
        <div className="image-bl">
          <img src={Imagem} alt="Nova Imagem" /> 
          <p className="c-1-title">BLACK WORK</p>  
          <p className="c-1">As tatuagens Blackwork são uma forma única e impressionante de expressão artística na arte corporal. <br/> Originárias das tradições da tatuagem tribal e étnica, as tatuagens Blackwork evoluíram para abraçar uma ampla variedade de estilos e técnicas.</p>
          <p className="c-1"> Caracterizadas por designs intrincados e detalhes impressionantes, essas tatuagens são marcadas pelo uso predominante de tinta preta para criar padrões e formas distintas. </p>
          <ContactButton message="Olá vim através do site do seu site, gostaria saber sobre BlackWork" />
        </div>
      </div>  
      <div className="art-gallery">
        <h1 className="text">GALERIA</h1>
        <p className="description">Deslize para à esquerda ⇽</p>
        <div className="carousel">
            {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt={`Imagem ${index + 1}`} loading="lazy" />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Formanda;
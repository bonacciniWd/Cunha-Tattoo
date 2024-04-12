import React, {useState, useEffect} from 'react';
import './Convidada.css';
import videoUrl from '../assets/bg-video.mp4';
import Imagem from '../assets/Imagem5.jpg';
import ContactButton from './ContactButton';

import en1 from "../assets/en1.jpg";
import en2 from "../assets/en2.jpg";
import en3 from "../assets/en3.jpg";
import en4 from "../assets/en4.jpg";
import en5 from "../assets/en5.jpg";

const Ensaio = () => {
  const images = [en4, en2, en3, en1, en5]; // Lista de URLs das imagens
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
          <p className="c-1-title">BODY PIERCING</p>  
          <p className="c-1">O body piercing é uma forma de modificação corporal que envolve a perfuração de partes do corpo para a inserção de joias decorativas.<br/><br/>Originado há milhares de anos em várias culturas ao redor do mundo, o body piercing evoluiu para se tornar uma expressão moderna de estilo pessoal e autoexpressão.  </p>
          <ContactButton message="Olá! eu vim através do seu site, e gostaria de mais informações sobre Body piercing." />
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

export default Ensaio;
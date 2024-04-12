import React, {useState, useEffect} from 'react';
import './Convidada.css';
import videoUrl from '../assets/bg-video.mp4';
import Imagem from '../assets/cv2.jpg';
import ContactButton from './ContactButton';

import nv1 from '../assets/cv1.jpg';
import nv2 from '../assets/cv2.jpg';
import nv3 from '../assets/cv3.jpg';
import nv4 from '../assets/cv4.jpg';
import nv5 from '../assets/cv5.jpg';



const Noiva = () => {
  const images = [nv1, nv2, nv3, nv4, nv5]; // Lista de URLs das imagens
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
          <img src={Imagem} alt="Nova Imagem"  /> 
          <p className="c-1-title">PRETO E CINZA</p>  
          <p className="c-1">A tatuagem em preto e cinza é uma forma de arte corporal que utiliza sombras e tons de cinza para criar imagens detalhadas e expressivas. Originada de técnicas antigas, essa forma de arte evoluiu para incluir uma variedade de estilos, desde retratos realistas até imagens simbólicas.<br/> Cada tatuagem em preto e cinza é uma obra-prima de habilidade artística, destacando-se pela sua sutileza e sofisticação.  </p>
          <ContactButton message="Olá vim através do seu site e gostaria de saber sobre arte em preto e cinza..." />
        </div>
      </div> 
      <div className="art-gallery">
        <h1 className="text">GALERIA</h1>
        <p className="description">Deslize para à esquerda ⇽</p>
        <div className="carousel">
            {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt={`Imagem ${index + 1}`} loading="lazy"/>
            </div>
            ))}
        </div>
      </div> 
    </div>
  );
}

export default Noiva;
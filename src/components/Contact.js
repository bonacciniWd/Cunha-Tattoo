import React, { useEffect } from 'react';
import './ContatoCard.css';
import videoUrl from '../components/assets/bg-video.mp4';
import ContatoCard from './ContatoCard';


const Main = () => {
  useEffect(() => {
    const video = document.querySelector('.video-bg');

    // Desativa o som após o vídeo ser carregado e iniciado
    video.addEventListener('canplaythrough', () => {
      video.muted = true;
    });
  }, []);

  return (
    <div className="main">
      <div className="video-container">
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="contact-container">
        <ContatoCard />
      </div>
    </div>  
  );
}

export default Main;
import React, { useState, useRef } from 'react';
import './WelcomeContent.css';
import Gabriel from '../components/assets/gabriel.png';

import videoUrl from '../components/assets/inicio.mp4';

import { FaPlay, FaPause } from 'react-icons/fa'; // Importa os ícones de play e pause do Font Awesome

const WelcomeContent = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    videoRef.current.pause();
  };

  return (
    <div className="content">
      <h1 className='h1'>Tattoo & Piercer</h1>
      <video ref={videoRef} className="inicio-vid" autoPlay={playing} muted={true} loop={true}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      {!playing ? (
        <button className="play-button" onClick={handlePlay}>
          <FaPlay /> {/* Ícone de play */}
        </button>
      ) : (
        <button className="play-button" onClick={handlePause}>
          <FaPause /> {/* Ícone de pause */}
        </button>
      )}
      <p className='p-2'>Meus Serviços</p>
    </div>
  );
}

export default WelcomeContent;

import React from 'react';
import ReactPlayer from 'react-player';
import './WelcomeContent.css';

import thumbUrl from '../components/assets/inicio.jpg';

import videoUrl from '../components/assets/inicio.mp4';

const WelcomeContent = () => {
  return (
    <div className="content">
      <h1 className='h1'>Tattoo & Piercer</h1>
      <ReactPlayer
        url={videoUrl}
        className="inicio-vid"
        playing={true}
        loop={true}
        controls={true}
        light={<div className="thumbnail-container"><img src={thumbUrl} alt="Thumbnail" /></div>} 
      />
      <p className='p-2'>Meus Serviços</p>
    </div>
  );
}

export default WelcomeContent;

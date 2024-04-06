/*/ COMPONENTE INFO = TOUR VIRTUAL /*/

import React from 'react';
import './Info.css'; // Import your CSS file for styling
import {FcSlrBackSide} from 'react-icons/fc';


const Info = () => {
  return (
    <div className="layout-container">
       <div className="top-text">
        <h2 className="c-2-title"><FcSlrBackSide /> TOUR VIRTUAL</h2>
        <p className="c-2">Conheça meu estúdio através de um tour virtual do nosso espaço interno. </p>
      </div>
      <div>
      <iframe
        title="Tour Virtual Cunha Tattoo"
        allowfullscreen
        src="https://tourmkr.com/F1Te1IiSly"
      ></iframe>
       <div className="side-space" />
    </div>
    </div>
  );
};

export default Info;


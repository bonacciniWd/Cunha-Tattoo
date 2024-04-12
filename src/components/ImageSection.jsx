import React from 'react';
import { Link } from 'react-router-dom';
import {Tilt} from 'react-tilt'; // Importe o componente Tilt
import './ImageSection.css'; // Importe o CSS específico para essa seção
import Imagem from '../components/assets/cv2.jpg';
import Imagem2 from '../components/assets/f1.jpg';
import Imagem3 from '../components/assets/Imagem3.jpg';
import Imagem4 from '../components/assets/Imagem4.jpg';
import Imagem5 from '../components/assets/Imagem5.jpg';

const ImageSection = () => {
  return (
    <div className="new-content">
          <div className="image-block">
            <Link to="/preto&cinza" className="link-no-underline">
              <Tilt options={{ max: 25 }}>
                 <img src={Imagem} alt="Nova Imagem"  />
              </Tilt>
              <p className="p-1-title">PRETO E CINZA</p>
            </Link>
          </div>

      <div className="image-block" href="/blackwork">
      <Tilt options={{ max: 25 }}>   
        <Link to="/blackwork" className="link-no-underline">  
            <img src={Imagem2} alt="Nova Imagem"  />
            <p className="p-1-title">BLACK WORK</p>
        </Link>
      </Tilt>  
      </div>

      <div className="image-block" href="/pontilhismo">
        <Tilt options={{ max: 25 }}>
          <Link to="/pontilhismo" className="link-no-underline"  >
            <img src={Imagem3} alt="Nova Imagem"  />
            <p className="p-1-title">PONTILHISMO</p>
          </Link>
        </Tilt>  
      </div>

      <div className="image-block" href="/piercing">
       <Tilt options={{ max: 25}}>   
          <Link to="/piercing" className="link-no-underline"  >  
            <img src={Imagem5} alt="Nova Imagem"  />
            <p className="p-1-title">BODY PIERCING</p>
          </Link>
       </Tilt>
      </div>

    </div>
  );
}

export default ImageSection;

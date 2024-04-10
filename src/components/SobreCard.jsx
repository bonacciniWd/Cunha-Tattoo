import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Tilt} from 'react-tilt';
import './SobreCard.css';

import mapDesktop from '../components/assets/map-desk.png';

const ContactCard = () => {
  // Função para copiar o texto para a área de transferência
  const copyTextToClipboard = () => {
    const textToCopy = "Rua Marrocos, N-540, Sala 6, Nações, Balneário Camboriú";
    
    // Cria um elemento de texto temporário
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Adiciona o elemento de texto temporário à DOM
    document.body.appendChild(textArea);

    // Seleciona o texto no elemento
    textArea.select();

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento de texto temporário da DOM
    document.body.removeChild(textArea);

    // Informa ao usuário que o texto foi copiado (opcional)
    alert("Pronto, endereço copiado! " + textToCopy);
  };

  return (
    <div className="tilt-container">
      <div className="contact-card">
        <h2>Sobre</h2>
        <p onClick={copyTextToClipboard}>
          Nosso estúdio está localizado na<br />
          <span className="blue-text">Rua Marrocos, N-540, Sala 6, Nações, Balneário Camboriú</span>
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.6100917608305!2d-48.6483403245582!3d-26.97924417660762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b724035f5ee5%3A0x702f7090bc83eb35!2sSilvio%20Ignacio%20Tattoo%20Studio!5e0!3m2!1spt-BR!2sbr!4v1712705872081!5m2!1spt-BR!2sbr" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Aberto à visitas das 10:00 AM, 20:00 PM.<br /><br /> Atendimento apenas agendamentos.ㅤ</p>
        
      </div>
    </div>
  );
}

export default ContactCard;



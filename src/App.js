import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Ensaio from './components/services/Ensaio';
import Debutante from './components/services/Debutante';
import Convidada from './components/services/Convidada';
import Formanda from './components/services/Formanda';
import Noiva from './components/services/Noiva';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/piercing" element={<Ensaio />} />
          <Route path="/pontilhismo" element={<Convidada />} />
          <Route path="/blackwork" element={<Formanda />} />
          <Route path="/preto&cinza" element={<Noiva />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

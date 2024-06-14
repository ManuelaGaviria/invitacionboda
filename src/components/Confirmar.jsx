import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Confirmar() {
  return (
    <div className="container text-center">
      <h1 className="titulo">Confirmar Asistencia</h1>
      <div className="row mt-4">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="subtitulo">Novia</h2>
          <a href="https://wa.me/3175643866" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaWhatsapp className="clock-icon m-3" /> 
          </a>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h2 className="subtitulo">Novio</h2>
          <a href="https://wa.me/3506141170" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaWhatsapp className="clock-icon m-3" /> 
          </a>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default Confirmar;

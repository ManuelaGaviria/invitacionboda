import React from 'react';
import { motion } from 'framer-motion';
import ButtonLink from "./ButtonLink";
import sello from "../images/sello.png"; // Importa la imagen del sello
import flores from "../images/flores.png"; // Importa la imagen de las flores

const WeddingInvitation = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Estado inicial de la animación de entrada
      animate={{ opacity: 1, y: 0 }} // Estado final de la animación de entrada
      exit={{ opacity: 0, y: -50 }} // Estado de salida de la animación
      transition={{ duration: 0.5 }} // Duración de la transición de entrada y salida
      className="invitation-container"
    >
      {/* Contenedor del shape divider */}
      <div className="custom-shape-divider-top-1718297655">
        {/* SVG del shape divider */}
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          />
        </svg>
        {/* Título */}
        <h1 className="shape-title">Evelyn & David</h1>
      </div>
      
      {/* Contenedor del sello con animación */}
      <div className="seal">
        <ButtonLink destino="/invitacion" clase="ButtonSello">
          <motion.img
            src={sello}
            alt="Sello"
            initial={{ scale: 1 }} // Escala inicial del sello al cargar la página
            animate={{ scale: [0.8, 1, 0.8] }} // Escala final del sello al cargar la página
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} // Duración de la transición de escala y repetición infinita con reverso
            className="seal-image"
          />
        </ButtonLink>
      </div>
    </motion.div>
  );
};

export default WeddingInvitation;

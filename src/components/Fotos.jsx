import React from 'react';
import { motion } from 'framer-motion';
import foto1 from "../images/foto1.jpeg";
import foto2 from "../images/foto2.jpeg";
import foto3 from "../images/foto3.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Fotos() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.5,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="container">
      <div className="row d-none d-md-flex">
        <motion.div className="col" custom={3} initial="hidden" animate="visible" variants={variants}>
          <img src={foto1} alt="foto1" className="img-custom" />
        </motion.div>
        <motion.div className="col" custom={2} initial="hidden" animate="visible" variants={variants}>
          <img src={foto2} alt="foto2" className="img-custom" />
        </motion.div>
        <motion.div className="col" custom={1} initial="hidden" animate="visible" variants={variants}>
          <img src={foto3} alt="foto3" className="img-custom" />
        </motion.div>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide d-md-none" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={foto1} className="d-block w-100 img-custom" alt="foto1" />
          </div>
          <div className="carousel-item">
            <img src={foto2} className="d-block w-100 img-custom" alt="foto2" />
          </div>
          <div className="carousel-item">
            <img src={foto3} className="d-block w-100 img-custom" alt="foto3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default Fotos;

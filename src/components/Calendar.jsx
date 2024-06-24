import React from 'react';
import { motion } from 'framer-motion';
import calendar from "../images/calendar.png";
import { LuClock3 } from "react-icons/lu";
import { SiTinyletter } from "react-icons/si";
import { IoRestaurant } from "react-icons/io5";

function Calendar() {
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <div className='container text-center'>
            <motion.div initial="hidden" animate="visible" variants={variants}>
                <h1 className='titulo'>Decimos "Sí"</h1>
            </motion.div>
            <div className='row'>
                {/* Columna izquierda (calendario) */}
                <motion.div className="col-md-6 d-flex align-items-center justify-content-center" initial="hidden" animate="visible" variants={variants}>
                    <img className='calendar img-fluid' src={calendar} alt="calendar" style={{ height: '400px' }} />
                </motion.div>
               
                {/* Columna derecha (hora y mapa) */}
                <motion.div className="col-md-6 d-flex flex-column justify-content-center align-items-center" initial="hidden" animate="visible" variants={variants}>
                    {/* Contenedor de la hora y el botón del mapa */}
                    <div className='text-center mb-4'>
                        {/* Contenedor de la hora */}
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <LuClock3 className='clock-icon m-3' />
                            <h1 className='hora'>3:00 pm</h1>
                        </div>

                        {/* Contenedor del mapa */}
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <SiTinyletter className='clock-icon m-3' />
                            <h1 className='hora'>Lluvia de Sobres</h1>
                        </div>

                        {/* Contenedor del almuerzo */}
                        <h3 className='titulo'>¿Nos acompañas a almorzar?</h3>
                        <p></p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <IoRestaurant className='clock-icon m-3' />
                            <div>
                                <a href="https://crepesywaffles.com/ubicaciones/florida"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-mapa">
                                    Ver restaurante
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <hr className="my-4" />
        </div>
    );
}

export default Calendar;

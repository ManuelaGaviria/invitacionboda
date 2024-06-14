import React from 'react';
import { motion } from 'framer-motion';
import calendar from "../images/calendar.png";
import { LuClock3 } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";

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
                <motion.div className="col-md-5 d-flex align-items-center justify-content-center" initial="hidden" animate="visible" variants={variants}>
                    <img className='calendar img-fluid' src={calendar} alt="calendar" style={{ height: '400px' }} />
                </motion.div>
                <motion.div className="col-md-2 d-flex align-items-center justify-content-center" initial="hidden" animate="visible" variants={variants}>
                    <h1 className='titulo'>¡Los esperamos!</h1>
                </motion.div>
                {/* Columna derecha (hora y mapa) */}
                <motion.div className="col-md-5 d-flex flex-column justify-content-center align-items-center" initial="hidden" animate="visible" variants={variants}>
                    {/* Contenedor de la hora y el botón del mapa */}
                    <div className='text-center mb-4'>
                        {/* Contenedor de la hora */}
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <LuClock3 className='clock-icon m-3' />
                            <h1 className='hora'>3:00 pm</h1>
                        </div>

                        {/* Contenedor del mapa */}
                        <div className='d-flex justify-content-center align-items-center'>
                            <FaMapLocationDot className='clock-icon m-3' />
                            <div>
                                <a href="https://www.google.com/maps/place/Cra.+36+%2334-81,+Medell%C3%ADn,+Buenos+Aires,+Medell%C3%ADn,+Antioquia/@6.2344035,-75.5665864,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44284f6b457add:0x37a81d1b9293b60c!8m2!3d6.2343982!4d-75.5640115!16s%2Fg%2F11fnx1j49v?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-mapa">
                                    Ver mapa
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

import React from 'react';
import { motion } from 'framer-motion';

function Iniciales() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container text-center"
        >
            <h1 className='titulo'>E & D</h1>
            <h3 className='subtitulo'>¡Nos Casamos!</h3>
            <hr className="my-4" />
        </motion.div>
    );
}

export default Iniciales;

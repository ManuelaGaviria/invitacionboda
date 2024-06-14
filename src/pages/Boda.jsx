import React, { useEffect, useRef } from 'react';
import Iniciales from '../components/Iniciales'
import Fotos from '../components/Fotos'
import cancion from "../audio/StandByMe.mp3"
import Calendar from '../components/Calendar';
import Frase from '../components/Frase';
import Confirmar from '../components/Confirmar';

function Boda() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Reproduce el audio cuando el componente se monta
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Ajusta el volumen al 50%
      audioRef.current.play();
    }
  }, []);

  //<audio ref={audioRef} src={cancion} loop autoPlay style={{ display: 'none' }} />

  return (
    <div>
      
      <Iniciales></Iniciales>
      <Fotos></Fotos>
      <Calendar></Calendar>
      <Frase></Frase>
      <Confirmar></Confirmar>
    </div>
    
    
  )
}

export default Boda
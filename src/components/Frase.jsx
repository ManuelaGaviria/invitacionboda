import React from 'react';
import florIzq from "../images/florIzq.png";
import florDer from "../images/florDer.png";

function Frase() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className='col-3 d-flex align-items-center justify-content-center'>
          <img className='image-flower img-fluid' src={florDer} alt="Flor izquierda" />
        </div>
        <div className='col-6 d-flex text-center align-items-center justify-content-center'>
          <h1 className='frase-texto'>
          Duas animas in unum destinatum, nobiscum ad amorem qui nos coniungit celebrandum advenite, testes felicitatis nostrae esto.
          </h1>
        </div>
        <div className='col-3 d-flex align-items-center justify-content-center'>
          <img className='image-flower img-fluid' src={florIzq} alt="Flor derecha" />
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default Frase;

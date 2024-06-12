import React from 'react'
import { useState } from 'react'
import '../Styles/card.css'

export const Card = ({ imagen, titulo,descripcion,precio,handleAgregar,handleQuitar,handleDisminuir,handleAumentar }) => {

    const [added, setAdded] = useState(false);

    const ClickAgregar = () => {
        handleAgregar();
        setAdded(true);
    }

    const clickQuitar = () => {
        handleQuitar();
        setAdded(false);
    }

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">  
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-descripcion">{descripcion}</p>
            <p className="tarjeta-precio" >${precio}</p>

            { added
            ? <button
            type="button"
            className="boton-quitar" onClick={ clickQuitar}>Quitar del carrito </button>
            : <button type='button' className='boton-agregar' onClick={ ClickAgregar}> Agregar </button>
            }
        </div>

       
    </div>
        
  )
}

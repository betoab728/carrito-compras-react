import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

     //generate table

     const { listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra } = useContext(CarritoContext)

     const calcularTotal = () => {

       
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
     }

     const handleFinalizar = () => {
       print()
     }

  return (
   <>
    
    <table className='table'>
        <thead className='table-dark'>

                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col"> Cantidad</th>
                    <th scope="col"> Eliminar</th>

                </tr>

        </thead>

        <tbody>
            {
                
                listaCompras.map( item => (

                    <tr key={item.id}> 
                        <th>{item.title}</th>
                        <td>{item.price}</td>
                        <td>
                            <button className='btn  btn-ouline-primary' onClick={ () => aumentarCantidad(item.id) } >+1</button>
                            <button className='btn btn-primary' > {item.cantidad} </button>
                            <button className='btn  btn-ouline-danger' onClick={ () => disminuirCantidad(item.id) } >-1</button>
                        </td>
                        <td><button className='btn btn-danger' onClick={ () => eliminarCompra(item.id) } >X</button> Eliminar </td>
                     
                    </tr>

                ))        
            }

            <th>Total</th>
            <td></td>
            <td> </td>
            <td>$ {calcularTotal() }</td>
           
        </tbody>

    </table>

    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
        <button className='btn btn-primary' onClick={handleFinalizar} disabled={ listaCompras.length < 1 } > Finalizar Compra</button>
    </div>

   </>
  )
  
}

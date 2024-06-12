import React, { useEffect } from 'react'
import { useState } from 'react'


export const CarritoPage = () => {

     //generate table

     const { listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra } = useContext(CarritoContext)


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
                            <button className='btn btn-primary' onClick={ () => aumentarCantidad(item.id) } >+</button>
                            <button className='btn btn-primary' onClick={ () => disminuirCantidad(item.id) } >-</button>
                        </td>
                        <td><button className='btn btn-danger' onClick={ () => eliminarCompra(item.id) } >X</button></td>
                     
                    </tr>

                ))        
            }
           
        </tbody>

    </table>

    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
        <button className='btn btn-primary'> Finalizar Compra</button>
    </div>


   </>
  )
  
}

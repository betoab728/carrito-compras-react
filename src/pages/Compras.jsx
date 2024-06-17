import { Card } from '../componentes/Card'
import React, { useContext } from 'react'
import { ProductoContext } from '../context/ProductoContext'
import { CarritoContext } from '../context/CarritoContext'

export const Compras = () => {

    const { productos } = useContext(ProductoContext)
    const { listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra } = useContext(CarritoContext)

    const handleAgregar=( compra)=>{

        agregarCompra(compra)

    }
    const handleQuitar=(id)=>{
        eliminarCompra(id)
    }
    const handleDisminuir=(id)=>{

        
    }
    const handleAumentar=(id)=>{

    }
    

  return (
   <>   

   <h1>Productos</h1> 
   <hr />
   <div className='grilla'>

   
   {productos.map(producto => (

    <Card key={producto.id}
   
       imagen={producto.image} 
       titulo={producto.title}
       descripcion={producto.description}
       precio={producto.price}
       handleAgregar={ () => handleAgregar(producto)}
       handleQuitar={()=> handleQuitar(producto.id)}
     
      
    ></Card>
    
   ))} </div>
   </>
  )
}

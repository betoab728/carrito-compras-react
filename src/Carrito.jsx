import React from 'react'
import { Navbar } from './componentes/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Compras } from './pages/Compras'
import { CarritoPage } from './pages/CarritoPage'
import { Navigate } from 'react-router-dom'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const Carrito = () => {
  return (
    < ProductosProvider > 
    <CarritoProvider>
    <Navbar></Navbar>
    <div className='container'>
  
        <Routes>

            <Route path="/" element={ <Compras> </Compras> } ></Route>
            <Route path="/carrito" element={ <CarritoPage> </CarritoPage> } ></Route>
            <Route path="/*" element={ <Navigate to="/" /> } ></Route>

        </Routes>
   </div>
   </CarritoProvider>
   </ProductosProvider>
  )
}

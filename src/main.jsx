import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Carrito } from './Carrito.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <React.StrictMode>
    <Carrito> </Carrito>
  </React.StrictMode>
  </BrowserRouter>
)

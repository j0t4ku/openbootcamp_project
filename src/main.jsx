import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
//estilos propios abajo de la importacion de bootstrap
import './index.css'

import App from './App'
import AppRoutingFinal from './AppRoutingFinal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppRoutingFinal></AppRoutingFinal> */}
    <App></App>
  </React.StrictMode>,
)

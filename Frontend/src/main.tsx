import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {SnackbarProvider} from 'notistack'

import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SnackbarProvider>
    <BrowserRouter> 
    <App /> 
    </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>,
)

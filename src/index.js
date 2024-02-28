import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ListaCarreras, loader as ListaCarrerasLoader } from './Componentes/ListaCarreras.js';
import { DetallesEquipo, loader as DetallesEquipoLoader } from './Componentes/DetallesEquipo.js';
import { ListaChassis, loader as ListaChassisLoader } from './Componentes/ListaChassis.js';
import DesplegableCarreras from './Componentes/DesplegableCarreras.js';
import DesplegableEquipos from './Componentes/DesplegableEquipos.js';
import Index from './Pages/Index';
import Layout from './Pages/Layout';
import Fernando from './Pages/Fernando';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    children: [
    {
      index:true,
      element: <Index />
    },
    {
      path: '/carreras',
      element: <DesplegableCarreras/>,
      children: [
        {
          path: '/carreras/:anio',
          element: <ListaCarreras/>,
          loader: ListaCarrerasLoader,
        }
      ]
    },
    {
      path: '/:circuito/detalles',
      element: <Index />
    },
    {
      path: '/equipos',
      element: <DesplegableEquipos/>,
      children: [
        {
          path: '/equipos/:id',
          element: <DetallesEquipo/>,
          loader: DetallesEquipoLoader,
        }
      ]
    },
    {
      path: '/coches',
      element: <ListaChassis />,
      loader: ListaChassisLoader,
    },
    {
      path: '/fernandoAlonso',
      element: <Fernando />
    },
  {
    
  }]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

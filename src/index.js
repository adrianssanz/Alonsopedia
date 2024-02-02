import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ListaCarreras } from './Componentes/ListaCarreras';
import { ListaEquipos } from './Componentes/ListaEquipos.js';
import DetallesEquipo from './Componentes/DetallesEquipo.js';
import Layout from './Componentes/Layout';
import Index from './Componentes/Index';
import Dropdown from './Componentes/DesplegableCarreras';

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
      element: <Dropdown/>,
      children: [
        {
          path: '/carreras/2021',
          element: <ListaCarreras props="2021" />
        },
        {
          path: '/carreras/2022',
          element: <ListaCarreras props="2022" />
        }
      ]
    },
    {
      path: '/equipos',
      element: <ListaEquipos/>,
    },
    {
      path: '/equipos/:id',
      element: <DetallesEquipo/>
    },
  {
    
  }]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

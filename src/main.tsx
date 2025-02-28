import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'; // Cambiado a createHashRouter
import { Home } from './components/Home/Home.tsx';
import { MainList } from './components/List/MainList.tsx';
import { Details } from './components/Details/Details.tsx';


/*
  Estructura de rutas

  \App
  |---\Home
  |---\ indice: lista de guias
  |-------\Details: detalles de la guia seleccionada 
  |---\ config: configuración de la pagina
  
*/

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    //errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/home',
        element: <Home/>,
      },
      {
        path: '/list/:id',
        element: <MainList/>
      },
      {
        path: '/details/:id',
        element: <Details/>
      }
    ]

  }

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

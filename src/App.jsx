import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import ItemDetails from './components/Layout/ItemDetails'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { useEffect } from 'react'
import { useAppContext } from './context/AppContext'


function App() {
const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/product/:id",
          element: <ItemDetails />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
      ]
    },
  ])




  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App

import React from 'react'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Shop from './Shop'
import Product from './Product'
import Blog from './Blog'
import Page from './Page'
import Contact from './Contact'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'


// Outlet
const PageRouter = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Shop',
        element:<Shop/>
      },
      {
        path:'/Product',
        element:<Product/>
      },
      {
        path:'/Blog',
        element:<Blog/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/Page',
        element:<Page/>
      },
      {
        path:'/Page',
        element:<Page/>
      },
    ]
  }
])

const Layout = () => {
  return(
    <div>
      <RouterProvider router={PageRouter}>
      </RouterProvider>
    </div>
  )
}

export default Layout

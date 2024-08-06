import React from 'react';
import Navbar from '../Components/Navbar';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Blog from './Blog';
import Page from './Page';
import Contact from './Contact';
import ShopList from './ShopList'; // Import the ShopList component
import Login from './Login'; 
import Wishlist from './Wishlist';
import AboutUs from './AboutUs';
import Faq2 from './Faq-2';
import Error404 from './Error404';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const PageRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Shop',
        element: <Shop />
      },
      {
        path: '/Product',
        element: <Product />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/Page',
        element: <Page />
      },
      {
        path: '/shopList', // Add the Shop List route
        element: <ShopList />
      },
      {
        path: '/login', // Add the Login route
        element: <Login />
      },
      {
        path: '/wishlist', // Add the Wishlist route
        element: <Wishlist />
      },
      {
        path: '/aboutUs', // Add the AboutUs route
        element: <AboutUs />
      },
      {
        path: '/Faq2', // Add the Faq2 route
        element: <Faq2 />
      },
      {
        path: '/page404', // Add the Error404 route
        element: <Error404 />
      }
  
      
    ]
  }
]);

const Layout = () => {
  return (
    <div>
      <RouterProvider router={PageRouter}>
      </RouterProvider>
    </div>
  );
};

export default Layout;

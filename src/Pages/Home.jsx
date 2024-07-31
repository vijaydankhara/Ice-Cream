import React from 'react'
import ProductItem from '../Components/Card';
import Footer from '../Components/Footer'
import SignIn from './SignIn';
import SignUp from './SingUp';
import IceCreamCard from '../Components/HomeCards';


function Home() {
  return (
    <div>
      {/* <ProductItem/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <IceCreamCard/>
      
      <Footer/>
    </div>
  )
}

export default Home

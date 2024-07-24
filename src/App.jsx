import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Home from './Pages/Home';
import FAQ from './Components/Faq2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Home/> */}
      <FAQ/>
    </>
  )
}

export default App

import React from 'react'

import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Home from './pages/Home'



const App = () => {  
  
  
  return (
    
    <div className='m-0 bg-zinc-800   w-full h-screen text-white  color-white text-2xl align-middle flex flex-col items-center '> 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />                 
      </Routes>
      
    </div>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  
  return (
    <div className='  w-full h-24 bg-teal-500 flex items-center justify-around ' >
        <h1 className='text-white text-3xl font-bold ml-5'  >Header</h1>
        <div className='  p-5 flex justify-evenly  ' >
            <Link to='/' className='p-3 m-3  hover:scale-105  active:scale-95 hover:underline transition-transform rounded-4xl'>Home</Link>
            <Link to='/Page1'className='p-3 m-3  hover:scale-105  active:scale-95 hover:underline transition-transform rounded-4xl' >Page1</Link>
            <Link to='/Page2' className='p-3 m-3  hover:scale-105  active:scale-105 hover:underline  rounded-4xl'>Page2</Link>
        </div>
    </div>
  )
}

export default Header
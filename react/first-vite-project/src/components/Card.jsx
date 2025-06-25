import React, { useState } from 'react'

const Card =(props)=> { 
    
    return  (
    <div className=' w-64 h-96 bg-teal-700 rounded-[1vw] items-center justify-center flex flex-col m-5'>
      <img className=' h-48 w-32 mt-5 rounded-full border border-white border-solid border-width-2px' src={props.url} alt="" />
      <p className='  text-black text-2xl font-bold px-5 py-1' >{props.author}</p>
      
      <p className='text-black text-2xl font-bold px-5 py-1' ></p>
        <p className='  text-black text-2xl font-bold px-5 py-1' >{props.id}</p>
        <button className='bg-indigo-400 bg-opacity-25 text-white text-bsold text-sm mb-2 rounded-lg px-2 py-1' >Add Friend</button>
    </div>
    
  )
}

export default Card 
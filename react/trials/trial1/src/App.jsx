import React from 'react'
import axios from 'axios'

const App = () => {
  const getData =() => {
    const response = axios.get('https://picsum.photos/v2/list')
    console.log(response)
  }
  return (
    <div className='w-full h-screen bg-zinc-900' >
      <button  onClick={getData} className=' w-48  h-24 text-white bg-teal-600 rounded-2xl m-10 hover:scale-110 transition-transform border-b-blue-50 font-bold text-2xl active:scale-95 active:bg-teal-700 ' >Get Data</button>
      <div className='w-96 h-36 bg-blue-950 ml-10 rounded-2xl text-3xl text-white text-center '></div>
    </div>
  )
}

export default App
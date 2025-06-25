import React, { useState } from 'react'
import Card from './components/Card'
import axios from 'axios'


const App = () => {  
  const [Data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
    const data = response.data;
    setData(data);
    
  }
  
  return (
    <div className='m-0 p-5 bg-zinc-800  display-flex w-full h-screen text-white  color-white text-2xl flex-row items-center justify-center'> 

    <button onClick={getData} className='w-48 h-24 bg-blue-400 active:scale-95 hover:scale-105 rounded-2xl transition-transform active:bg-blue-500 font-bold text-white border-amber-400  ' >Fill cards</button>
      <div className='flex  flex-wrap justify-evenly items-center'>
       {Data.map((elem)=>{
        return (
          <Card 
            author={elem.author}
            url={elem.download_url}
            id={elem.id}
            key={elem.id}
          />
        )
       })}
      </div>
    </div>
  )
}

export default App
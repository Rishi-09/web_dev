import React from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { useState } from 'react'    


function Home() {
    const [Data, setData] = useState([])
    const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
    const data = response.data;
    setData(data);
    
  }

  return (
    <>
    <button onClick={getData} className='w-48 h-24 bg-blue-400 active:scale-95 hover:scale-105 rounded-2xl static  transition-transform active:bg-blue-500 font-bold text-white border-amber-400 m-40 p-10 ' >Fill cards</button>
        <div className='flex  w-full h-full flex-wrap justify-evenly items-center bg-zinc-700 '>
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
    </>

  )
}

export default Home
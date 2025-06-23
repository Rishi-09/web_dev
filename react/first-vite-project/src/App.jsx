import React from 'react'
import Card from './components/Card'

function App() {  
  // Sample data for the cards
  const data = [{
    "name": "Narendra Modi",
    "age": 73,
    "city": "Vadnagar",
    "profile_photo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Narendra_Modi_2019.jpg/800px-Narendra_Modi_2019.jpg"
  },
  {
    "name": "Mahatma Gandhi",
    "age": 78,
    "city": "Porbandar",
    "profile_photo_url": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mahatma_Gandhi_1942.jpg"
  },
  {
    "name": "Priyanka Chopra",
    "age": 43,
    "city": "Jamshedpur",
    "profile_photo_url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Priyanka_Chopra_in_2019.jpg"
  },
  {
    "name": "Virat Kohli",
    "age": 34,
    "city": "Delhi",
    "profile_photo_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Virat_Kohli_2018.jpg"
  },
  {
    "name": "Amitabh Bachchan",
    "age": 81,
    "city": "Allahabad",
    "profile_photo_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Amitabh_Bachchan_in_2017.jpg"
  }
  ]

  return (
    <div className='m-0 p-5 bg-zinc-800  display-flex w-full h-screen text-white  color-white text-2xl '> 
      <div className='flex  flex-wrap justify-evenly items-center'>
        {data.map(function(elem){
          return ( <Card Name={elem.name} age = {elem.age} city={elem.city} image={elem.profile_photo_url} />)
        })}
      </div>
    </div>
  )
}

export default App
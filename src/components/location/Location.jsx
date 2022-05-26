import React from 'react'
import { useEffect, useState } from 'react';
import data from '../../data.json'

export default function Location() {
  const [appData, setAppData] = useState([])

  useEffect(() => {
    setAppData(JSON.parse(localStorage.getItem("myArray").length) ? JSON.parse(localStorage.getItem("myArray")) : data)
  },
    [])

  return (
    <div className='location-container' >
      <h1>All Restaurants</h1>
      <div className='locations'>
        {appData.map(d =>
          <div className='location' key={d.locations.name}>
            <h2>Category {d.category}</h2>
            <h4>Name {d.locations.name}</h4>
            <p>Local Category {d.locations.category}</p>
            <p>Adress {d.locations.address}</p>
            <p>Coordonates latitudine {d.locations.coordinates.lat}</p>
            <p>Coordonates longitudine {d.locations.coordinates.long}</p>
          </div>
        )
        }
      </div>
    </div >
  )
}

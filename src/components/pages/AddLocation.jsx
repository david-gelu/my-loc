import React, { useState } from 'react'
import data from '../../data.json'

export default function AddLocation() {
  const [addLocation, setAddLocation] = useState(data)
  const [addName, setAddName] = useState('')
  const [addAddress, setAddAddress] = useState('')
  const [addCoordonateLat, setAddCoordonateLat] = useState('')
  const [addCoordonateLong, setAddCoordonateLong] = useState('')
  const [addCategory, setAddCategory] = useState('')

  const newLocation = {
    category: addCategory,
    locations: {
      name: addName,
      address: addAddress,
      coordinates: {
        lat: addCoordonateLat,
        long: addCoordonateLong,
      },
      category: addCategory,
    }
  }

  const add = () => {
    setAddLocation(prev => ([
      ...prev,
      newLocation
    ]),
      localStorage.setItem('myArray', JSON.stringify(addLocation)))
  }

  return (
    <div className='form-container'>
      <h2>Add Location</h2>
      <div class="mb-3">
        <label htmlFor='name' class="form-label">Name</label>
        <input type='text' onChange={(e) => setAddName(e.target.value)} id='name' />
      </div>
      <div class="mb-3">
        <label htmlFor='address'>Address</label>
        <input type='text' onChange={(e) => setAddAddress(e.target.value)} id='address' />
      </div>
      <div class="mb-3">
        <label htmlFor='lat'>Lat</label>
        <input type='text' onChange={(e) => setAddCoordonateLat(e.target.value)} id='lat' />
      </div>
      <div class="mb-3">
        <label htmlFor='name'>Long</label>
        <input type='text' onChange={(e) => setAddCoordonateLong(e.target.value)} id='long' />
      </div>
      <div class="mb-3">
        <label htmlFor='category'>Category</label>
        <input type='text' onChange={(e) => setAddCategory(e.target.value)} id='category' />
      </div>
      <button type="button" class="btn btn-primary" onClick={add}>Add</button>
    </div>
  )
}

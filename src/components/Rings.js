import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';


function Rings(props) {
  const {baseURL} = useContext(Context)
  const [rings, setRings] = useState([])
  const getRings = async () => {
  const url = `${baseURL}/rings`
  await axios.get(url)
  .then(res => {
    console.log(res.data)
    setRings(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getRings()}, [])
  console.log(rings)
  let sortedRings = [...rings].reverse()
  const ringShow = sortedRings.map(ring => {
    return (
      <div key={ring._id}>
        <h2>{ring.title}</h2>
        <h2>{ring.price}</h2>
        <img src={ring.image} alt={ring.title} />
        <h2>{ring.availability}</h2>
      </div>
    )
  })
  return (
    <div>
      {ringShow}
    </div>
  );
}

export default Rings;
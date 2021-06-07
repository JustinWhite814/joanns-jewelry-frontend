import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';

function Earrings(props) {
  const {baseURL} = useContext(Context)
  const [earrings, setEarrings] = useState([])
  const getEarrings = async () => {
  const url = `${baseURL}/earrings`
  await axios.get(url)
  .then(res => {
    console.log(res.data)
    setEarrings(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getEarrings()}, [])
  console.log(earrings)
  let sortedEarrings = [...earrings].reverse()
  const earringsShow = sortedEarrings.map(earrings => {
    return (
      <div key={earrings._id}>
        <h2>{earrings.title}</h2>
        <h2>{earrings.price}</h2>
        <img src={earrings.image} alt={earrings.title} />
        <h2>{earrings.availability}</h2>
      </div>
    )
  })
  return (
    <div>
      {earringsShow}
    </div>
  );
}

export default Earrings;
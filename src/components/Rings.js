import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'

export default function Rings(props) {
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
  return (
  <div>
    <h1>Rings</h1>
      <Grid container>
        {sortedRings.map(ring => (
          <Grid item key={ring._id} xs ={12}  md={6} lg={4} className='bracelets'> 
            <img src={ring.image} alt={ring.title} />
            <p>{ring.title}</p>
            <p>{ring.price}</p>
            <p>{ring.availability}</p>
          </Grid>
        ))} 
      </Grid> 
  </div> 
  )
  }


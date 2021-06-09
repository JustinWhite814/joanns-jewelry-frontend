import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';
import '../styles/style.css'
import Grid from '@material-ui/core/Grid'

export default function Earrings(props) {
  const {baseURL, jewels} = useContext(Context)
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
  return (
  <div>
    <h1>Earrings</h1>
      <Grid container>
        {sortedEarrings.map(earring => (
          <Grid item key={earring._id} xs ={12}  md={6} lg={4} className='bracelets'> 
            <img src={earring.image} alt={earring.title} />
            <p>{earring.title}</p>
            <p>{earring.price}</p>
            <p>{earring.availability}</p>
          </Grid>
        ))} 
      </Grid> 
  </div> 
  )
  }


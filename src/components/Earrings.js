import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';
import '../styles/style.css'
import Grid from '@material-ui/core/Grid'

export default function Earrings(props) {
  const {baseURL} = useContext(Context)
  const [earrings, setEarrings] = useState([])
  const getEarrings = async () => {
  const url = `${baseURL}/earrings`
  await axios.get(url)
  .then(res => {
    setEarrings(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getEarrings()}, [])
  
  let sortedEarrings = [...earrings].reverse()
  return (
  <div>
    <div className='jumbotron'>
    <h1>Earrings</h1>
    </div>
      <Grid container>
        {sortedEarrings.map(earring => (
          <Grid item key={earring._id} xs ={12}  md={6} lg={4} className='earrings'> 
            <img src={earring.image} alt={earring.title} />
            <p>{earring.title}</p>
            <p>${earring.price}</p>
            <p>{earring.availability}</p>
          </Grid>
        ))} 
      </Grid> 
  </div> 
  )
  }


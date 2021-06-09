import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';
import '../styles/style.css'
import Grid from '@material-ui/core/Grid'



export default function Bracelets(props) {
  const {baseURL} = useContext(Context)
  const [bracelets, setBracelets] = useState([])
  const getBracelets = async () => {
  const url = `${baseURL}/bracelets`
  await axios.get(url)
  .then(res => {
    console.log(res.data)
    setBracelets(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getBracelets()}, [])
  console.log(bracelets)
  let sortedBracelets = [...bracelets].reverse()
  return (
  <div>
    <h1>Bracelets</h1>
    <Grid container>
    {sortedBracelets.map(bracelets => (
      
      <Grid item key={bracelets._id} xs ={12}  md={6} lg={4} className='container'> 
        <img src={bracelets.image} alt={bracelets.title} />
        <p>{bracelets.title}</p>
        <p>{bracelets.price}</p>
        <p>{bracelets.availability}</p>
      </Grid>
   
  ))} 
  </Grid> 
  </div> 
  )
  }

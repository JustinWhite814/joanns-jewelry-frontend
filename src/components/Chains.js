import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

export default function Chains(props) {
  const {baseURL} = useContext(Context)
  const [chains, setChains] = useState([])
  const getChains = async () => {
  const url = `${baseURL}/chains`
  await axios.get(url)
  .then(res => {
    setChains(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getChains()}, [])
  let sortedChains = [...chains].reverse()
  return (
  <div>
    <div className='jumbotron'>
    <h1>Chains</h1></div>
      <Grid container>
        {sortedChains.map(chain => (
          <Grid item key={chain._id} xs ={12}  md={6} lg={4} className='chains'> 
            <img src={chain.image} alt={chains.title} />
            <p>{chain.title}</p>
            <p>${chain.price}</p>
            <p>{chain.availability}</p>
          </Grid>
        ))} 
    </Grid> 
  </div> 
  )
  }


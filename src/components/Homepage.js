import React, { useContext, useState } from 'react'
import { Context }  from './Context'
import Grid from '@material-ui/core/Grid'
import '../styles/homepage.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


const Homepage = () => {
  const {jewels} = useContext(Context)
  const shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (array.length - i));
        const tempArray = array[j];
        array[j] = array[i];
        array[i] = tempArray;
    }
    return array
  }
 
  shuffle(jewels);

  return (
  <div>
    <div className="jumbotron">
    <h2>Joan's 5th Avenue Inc.</h2>
    <h3>Gold - Diamonds - Watches</h3>
    <h4>A Brooklyn Family Owned Business</h4>
    <h4>Trusted since 1959</h4>    
    </div>
    <Grid container >
        {jewels.map(jewel => (
          <Grid item key={jewel._id} xs ={12}  md={6} lg={4} className='jewels'> 
            <img src={jewel.image} alt={jewel.title} />
            <p>{jewel.title}</p>
            <p>${jewel.price}</p>
            <p>{jewel.availability}</p>
       </Grid>
        ))}
   </Grid>
  </div>
  )
}

export default Homepage;
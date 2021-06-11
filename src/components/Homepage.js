import React, { useContext, useState } from 'react'
import { Context }  from './Context'
import Grid from '@material-ui/core/Grid'
import '../styles/homepage.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'


function Homepage() {
  const {user} = useContext(Context);
  const {jewels} = useContext(Context)
  

  
  function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));

        const temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray
  }
 
  shuffle(jewels);
  console.log(user)
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
            <p>{jewel.price}</p>
            <p>{jewel.availability}</p>
       </Grid>
        ))}
   </Grid>
  </div>
  )


}

export default Homepage;
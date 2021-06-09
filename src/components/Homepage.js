import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { Context }  from './Context'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import '../styles/homepage.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './Navigation/Header'
function Homepage(props) {
  const {user} = useContext(Context);
  const {jewels} = useContext(Context)
  if(user)  {
  console.log(jewels)
  
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
  
  return (
  <div>
    <Grid container >
        {jewels.map(jewel => (
          <Grid item key={jewel._id} xs ={12}  md={6} lg={4} > 
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
else 
  return <h1>Please sign in</h1>

}

export default Homepage;
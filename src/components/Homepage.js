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
function Homepage(props) {
  const {loggedIn, setLoggedIn,user, setUser, data} = useContext(Context);
  let history = useHistory()
  
  const logOut = (e) => {
    e.preventDefault()
    history.push('/')
    
  }
  if(user)  {
   return (
    
    <Container maxWidth='sm' > 
    <Grid container>
    <div>
      {/* <button onClick={logOut}>Logout</button> */}
      <Button
       variant="contained" 
       href="/rings">
       Rings</Button>

      <br />

      <Button
       variant="contained" 
       href='/chains'>
       Chains
      </Button>
      
      <br />
      
      <Button 
        variant="contained"
        href='/earrings'>
        Earrings
      </Button>
      
      <br />
      
      <Button
       variant="contained"
       href='/bracelets'>
       Bracelets
      </Button>
      
      <br />
    </div>
    </Grid>
    </Container> 
  );
}
else 
  return <h1>Please sign in</h1>

}

export default Homepage;
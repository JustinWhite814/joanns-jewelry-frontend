import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { Context }  from './Context'
function Homepage(props) {
  const {loggedIn, setLoggedIn,user, setUser, data} = useContext(Context);
  let history = useHistory()
  const logOut = (e) => {
    e.preventDefault()
    history.push('/')
    
  }
  if(user)  {
    
    console.log(user)
  return (
    <div>
      <button onClick={logOut}>Logout</button>
      <Link to={'/rings'} ><button>rings</button></Link>
      <br />
      <Link to={'/chains'}><button>chains</button></Link>
      <br />
      <Link to={'/earrings'}><button>earrings</button></Link>
      <br />
      <Link to={'/bracelets'}><button>bracelets</button></Link>
      <br />
    </div>
  );
}
else 
  return <h1>Please sign in</h1>

}

export default Homepage;
import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
function Landing(props) {
  
  const {getUser, data} = useContext(Context)
  return (
    <div>
      <button onClick={getUser}>Get User</button>
      {
        data ? <h1>Welcome back {data.username}</h1>: null
      }
      <Login />
      <SignUp /> 
    </div>
  );
}

export default Landing;
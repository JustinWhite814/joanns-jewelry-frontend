import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
function Landing(props) {
  
  const {getUser, data, user} = useContext(Context)
  return (
    <div>
      {/* <button onClick={getUser}>Get User</button>
      {
        user ? <h1>Welcome back {user.username}</h1>: null
      } */}
      <Login />
      <SignUp /> 
    </div>
  );
}

export default Landing;
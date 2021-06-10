import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import '../styles/landing.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import EditProfile from './EditProfile';
function Authenticate() {
  
  return (
    <>
    <div className='jumbotron'>
      <div className="container">
      <div className='row align-items-center'>
      <Login />
      <SignUp /> 
      <EditProfile />
      </div>
      </div>
  </div>
    <h1>Welcome to Joan's 5th Avenue Inc</h1>
    <h1>Brooklyn's Most trusted Jewelry store Since 1959</h1>
    </>
  );
}

export default Authenticate;
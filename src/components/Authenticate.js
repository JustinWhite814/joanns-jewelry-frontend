import React, { useContext } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import '../styles/landing.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import EditProfile from './EditProfile';
import { Context } from './Context';
import ContactForm from './ContactForm';
function Authenticate() {
  const {user} = useContext(Context)
  return (
    <>
    <div className='jumbotron'>
      <div className="container">
      <div className='row align-items-center'>
      <h1>Welcome to Joan's 5th Avenue Inc</h1>
    <h1>Brooklyn's Most trusted Jewelry store Since 1959</h1>
      
      </div>
    
      </div>
  </div>
  <div className="container">
  
  </div>
  <div className="container">
  <div className='row align-items-center'>
    <Login />
    <SignUp />
    <ContactForm />
    <EditProfile />
    </div>
   </div>
    
    </>
  );
}

export default Authenticate;
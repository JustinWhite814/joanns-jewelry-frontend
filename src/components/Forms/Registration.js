import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import '../styles/registration.css'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import EditProfile from './EditProfile';
import ContactForm from './ContactForm';

const Registration = () => {
  return (
  <>
    <div className='jumbotron'>
      <div className="container">
      <div className='row align-items-center'>
        <h1>Welcome to Our Registration Page</h1>
        <h1>While the E-Commerce function of our site is still getting off the ground</h1>
        <h1>Please feel free to Sign Up for offers on new and coming soon promotions</h1>
        <h1>We Also have a request form where you can email 
          us directly regarding any inquiries you may have</h1>
      </div>
      </div>
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

export default Registration;
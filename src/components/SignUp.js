import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';

function SignUp(props) {
  async function register (e) {
    await axios({
    method: 'POST',
    data: {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value
    },
    withCredentials: true,
    url: "http://localhost:4000/register"
    })
    .then((res)=> console.log(res))
    // setLoggedIn(true)
  }
  
  return (
    <div className='col-md-6 border-right border-danger'>
      <h3 className='text-center'>Sign Up</h3>
      <form onSubmit={register} name='signup'>
        <div className='form-group row'>
            <div className='col'>
              <input type='text' name='firstname' placeholder='First name' autoComplete='on' />
            </div>
            <div className='col'>
              <input type='text' name='lastname' placeholder='Last name' autoComplete='on' />
            </div>
        </div>
        <div className='form-group'>
          <input type='text' name='username' placeholder='Choose your username' autoComplete='on' />
        </div>
        <div className='form-group'>
          <input type='password' name='password' placeholder='Password' autoComplete='on' />
        </div>
        <div className="text-left form-group">
          <button type="submit" >Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
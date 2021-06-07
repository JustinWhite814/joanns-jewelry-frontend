import axios from 'axios';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Context } from './Context';

function SignUp(props) {
  const {baseURL, setUser, loggedIn, setLoggedIn} = useContext(Context)
  async function addUser (newUser) {
    const url = `${baseURL}/users`
    await axios.post(url, newUser)
    setUser(newUser)
    setLoggedIn(true)
  }
  function signUp(e) {
    e.preventDefault()
    const newUser = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value
    }
    addUser(newUser)
  }
  return (
    <div className='col-md-6 border-right border-danger'>
      <h3 className='text-center'>Sign Up</h3>
      <form onSubmit={signUp} name='signup'>
        <div className='form-group row'>
            <div className='col'>
              <input type='text' className='form-control' name='firstname' placeholder='First name' autoComplete='on' />
            </div>
            <div className='col'>
              <input type='text' className='form-control' name='lastname' placeholder='Last name' autoComplete='on' />
            </div>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' name='username' placeholder='Choose your username' autoComplete='on' />
        </div>
        <div className='form-group'>
          <input type='password' className='form-control' name='password' placeholder='Password' autoComplete='on' />
        </div>
        <div className="text-left form-group">
          <button type="submit" className="btn buttons btn-lg">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
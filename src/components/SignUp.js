import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'

function SignUp() {
  let history = useHistory()
  async function register (e) {
    e.preventDefault()
    await axios({
    method: 'POST',
    data: {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value
    },
    withCredentials: true,
    url: "https://joansjewelrybackend.herokuapp.com/register"
    })
    .then(
      (res)=> { console.log(res)
      history.push('/')
      })
  }
  
  return (
    <div className='col-md-6 signUp'>
      <h3 className='text-center'>Sign Up</h3>
      <form onSubmit={register} name='signup'>
        <div className='form-group row'>
            <div className='col'>
              <input type='text' className='form-control' name='firstname' placeholder='First name' autoComplete='on' />
            </div>
            <div className='col'>
              <input type='text' className='form-control' name='lastname' placeholder='Last name' autoComplete='on' />
            </div>
        </div>

        <div className='row form-group'>
        <div className='col'>
          <input type='text' className='form-control' name='username' placeholder='Choose your username' autoComplete='on' />
        </div>
        <div className='col'>
          <input type='password' className='form-control' name='password' placeholder='Password' autoComplete='on' />
        </div>
        </div>
        <div className="text-center form-group buttons" >
          <button type="submit" className='btn btn-light' >Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
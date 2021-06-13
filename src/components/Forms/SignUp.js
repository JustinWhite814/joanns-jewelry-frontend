import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  let history = useHistory()

  const register = async (e) => {
    e.preventDefault()
    await axios({
    method: 'POST',
    data: {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    },
    withCredentials: true,
    // url: "https://joansjewelrybackend.herokuapp.com/register"
    url: "http://localhost:4000/register"
    })
    .then((res)=> { 
      if(res.data === 'user Already exists'){
      alert("Sorry UserName is Already in use")
      history.push('/authenticate')
      }
      console.log(res)
      alert("Joan's Jewelry Welcomes You")
      history.push('/')
      })
  }
  
  return (
    <div className='signUpForm col-md-6'>
      <h3 className='text-center'>Sign Up Form:</h3>
        <form onSubmit={register} name='signup'>
          <div className='form-group'>
            <div className='col'>
              <input type='text' className='form-control' name='firstname' placeholder='First name' autoComplete='on' />
            </div>
            <div className='col'>
              <input type='text' className='form-control' name='lastname' placeholder='Last name' autoComplete='on' />
            </div>
          </div>

          <div>
            <div className='col'>
              <input type='text' className='form-control' name='username' placeholder='Username' autoComplete='on' />
            </div>
            <div className='col'>
              <input type='password' className='form-control' name='password' placeholder='Password' autoComplete='on' />
            </div>
            <div className='col'>
              <input type='email' className='form-control' name='email' placeholder='Email Address' autoComplete='on' />
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
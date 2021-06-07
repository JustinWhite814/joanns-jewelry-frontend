import axios from 'axios';
import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from './Context';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  async function login (e) {
    await axios({
    method: 'POST',
    data: {
      username: e.target.username.value,
      password: e.target.password.value
    },
    withCredentials: true,
    url: "http://localhost:4000/login"
    })
    .then((res)=> console.log(res))
    // setLoggedIn(true)
  }
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };




  return (
    <div className='col-md-6'>
    <h3 className='text-center'>Login</h3>
    <form onSubmit={login} name='login'>
      <div className='form-group'>
        <label>Username</label>
        <input type='text' className='form-control' name='username' placeholder='Enter your username' autoComplete='on'/>
      </div>
      <div className='form-group'>
        <label>Password <i onClick={togglePasswordVisiblity}>{eye}</i> </label>
        <input type={passwordShown ? "text" : "password"} placeholder='Enter your password' className='form-control' name='password' autoComplete='on'/> 
      </div>
      <div className="text-left form-group">
        <button type="submit" className="btn btn-lg buttons">Login</button> 
      </div>

    </form>
  </div>




    

  );
}

export default Login;
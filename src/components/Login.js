import axios from 'axios';
import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from './Context';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login(props) {
  const {baseURL, setUser, setLoggedIn, loggedIn} = useContext(Context)
  const [passwordShown, setPasswordShown] = useState(false);
  async function fetchUserInfo(username, password) {
    const url = `${baseURL}/users/${username}`
    const axiosResponse = await axios.get(url)
    if (axiosResponse.data === null ) {
      alert('Please enter valid username and password')
      console.log('axios returned data null')
    } else if (axiosResponse.data.username === username && axiosResponse.data.password === password){
      setUser(axiosResponse.data)
      setLoggedIn(true)
    } 
  }
  function handleLogin(e) {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    fetchUserInfo(username, password)
  }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };




  return (
    <div className='col-md-6'>
    <h3 className='text-center'>Login</h3>
    <form onSubmit={handleLogin} name='login'>
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
      <div className="form-group">
        <a href=" " className="ForgetPwd">Forget Password?</a>
      </div>
    </form>
  </div>




    

  );
}

export default Login;
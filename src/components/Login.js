import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  let history = useHistory()
  const [passwordShown, setPasswordShown] = useState(false);
    async function loginUser (e) {
    e.preventDefault()
    await axios({
    method: 'POST',
    data: {
      username: e.target.username.value,
      password: e.target.password.value
    },
    withCredentials: true,
    url: "http://localhost:4000/login"
    })
    .then((res)=> {
      if(res.data === 'No user Exists'){
        history.push('/')
      }
      else {
        history.push("/homepage")
      }
    })
  }
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className='col-md-6'>
    <h3 className='text-center'>Login</h3>
    <form onSubmit={loginUser} name='login'>
      <div className='form-group'>
        <input type='text' className='form-control' name='username' placeholder='Enter your username' autoComplete='on'/>
      </div>
      <div className='form-group'>
        <label>Password <i onClick={togglePasswordVisiblity}>{eye}</i></label>
        <input type={passwordShown ? 'text' : 'password'} placeholder='Enter your password' name='password' autoComplete='on' /> 
      </div>
      <div className="text-left form-group">
        <button type="submit" className="btn btn-lg buttons">Login</button> 
      </div>
    </form>
  </div>
  )
}

export default Login;
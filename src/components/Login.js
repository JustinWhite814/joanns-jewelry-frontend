import axios from 'axios';
import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { SettingsInputSvideoRounded, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import {Context} from './Context'
// import '../styles/landing.css'
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const { baseURL, user, setUser} = useContext(Context)
  let history = useHistory()
  const [passwordShown, setPasswordShown] = useState(false);

  async function fetchUserInfo(username) {
    const url = `http://localhost:4000/user/${username}`
    await axios.get(url)
    .then(res => setUser(res.data))
  }
  console.log(user)
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
        console.log(res.data)
        history.push('/authenticate')
      }
      else {
        // history.push("/")
        const username = e.target.username.value
        fetchUserInfo(username)
      }
    })
  }
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
console.log(user)
  return (
    <div className='col-md-6'>
    <h3 className='text-center'>Login</h3>
    <form onSubmit={loginUser} name='login'>
      <div className='form-group row'>
        <div className='col'>
        <label>Username</label>
        <input type='text' className='form-control' name='username' placeholder='Enter your username' autoComplete='on'/>
      </div>
      <div className='col'>
        <label>Password <i onClick={togglePasswordVisiblity}>{eye}</i></label>
        <input type={passwordShown ? 'text' : 'password'} className="form-control" placeholder='Enter your password' name='password' autoComplete='on' /> 
      </div>
      </div>
      <div className="text-center form-group buttons">
        <button type="submit" className="btn btn-light " color="white">Login</button> 
      </div>
    </form>
  </div>
  )
}

export default Login;
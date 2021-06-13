import axios from 'axios';
import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {Context} from '../Context'
// import '../styles/style.css'
// const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
  const {user, setUser} = useContext(Context)
  let history = useHistory()
  const [passwordShown, setPasswordShown] = useState(false);

  const fetchUserInfo = async (username) => {
    const url = `http://localhost:4000/user/${username}`
    // const url = `https://joansjewelrybackend.herokuapp.com/user/${username}`
    await axios.get(url)
        .then(res => setUser(res.data))
    }

  const loginUser = async (e) => {
    e.preventDefault()
    await axios({
    method: 'POST',
    data: {
      username: e.target.username.value,
      password: e.target.password.value
    },
    withCredentials: true,
    // url: "https://joansjewelrybackend.herokuapp.com/login"
    url: "http://localhost:4000/login"
    })
    .then((res)=> {
      if(res.data === 'No user Exists'){
        console.log(res.data)
        alert("Sorry but that User doesn't exist")
        history.push('/authenticate')
      }
      else {
        const username = e.target.username.value
        history.push("/")
        fetchUserInfo(username)
      }
    })
  }
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className='loginForm col-md-6'>
    <h2 >Login Form:</h2>
    <form onSubmit={loginUser} name='login'>
      <div className='form-group'>
        <div className='col'>
        {/* <label>Username</label> */}
        <input type='text' className='form-control' name='username' placeholder='Enter your username' autoComplete='on'/>
      </div>
      <div className='col'>
        {/* <label>Password <i onClick={togglePasswordVisiblity}>{eye}</i></label> */}
        <input type={passwordShown ? 'text' : 'password'} className="form-control" placeholder='Enter your password' name='password' autoComplete='on' /> 
      </div>
      </div>
      <div className="text-center form-group buttons">
        <button type="submit" className="btn btn-dark " color="white">Login</button> 
      </div>
    </form>
  </div>
  )
}

export default Login;
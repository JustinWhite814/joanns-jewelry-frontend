import React, { useContext } from 'react';
import { Context } from '../Context';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const EditProfile = () => {
  const {setUser, user} = useContext(Context)
  const history = useHistory()

  const updateUser = async (newUserInfo) => {
    const url = `http://localhost:4000/user/${user._id}`
    // const url = `https://joansjewelrybackend.herokuapp.com/user${user._id}`
    await axios.put(url, newUserInfo)
    .then(res => {
      if(res.statusText === 'OK')
      {alert('User Successfully updated')
      history.push('/')
      setUser(res.data)
    }
     else {
      alert("We are sorry, your information could not be updated")
     }}
      
    )
  }

  const editUser = (e) => {
    e.preventDefault()
    const newUserInfo = {
      firstName: e.target.firstName.value,
      username: e.target.username.value,
      password: e.target.password.value
    }
    updateUser(newUserInfo)
  }
  
  return (
    <div className='updateForm col-md-6'>
      <h2>Edit Your Profile Information:</h2>
        <form onSubmit={editUser}>
          <div className='form-group' >
              <div className='col'>
              <input className="form-control" type='text' name='firstName' defaultValue={user.firstName} placeholder='First name'/>
              </div>
            <div className='col'>
              <input className="form-control" type='text' name='username' defaultValue={user.username} placeholder='username'/>   
            </div>
            <div className='col'>
              <input className="form-control" type='text' name='password' defaultValue={user.password} placeholder='Password'/>
            </div>
          </div>
          <div className='form-group buttons' >
            <button className="btn btn-dark" type='submit'>Update Profile Info</button>
          </div>
        </form>
    </div>

  );
}


export default EditProfile;
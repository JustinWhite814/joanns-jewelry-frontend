import React, { useContext } from 'react';
import { Context } from './Context';
import axios from 'axios'
function EditProfile(props) {
  const {baseURL, setUser, user} = useContext(Context)

  async function updateUser (newUserInfo) {
    const url = `http://localhost:4000/user/${user._id}`
    const updatedUser = await axios.put(url, newUserInfo)
    console.log(updatedUser.data)
  }
  function editUser (e) {
    e.preventDefault()
    const newUserInfo = {
      firstName: e.target.firstName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    }
    updateUser(newUserInfo)
  }
  console.log(user)
  return (
      <div className='col-md-6'>
    <h2>Edit Profile</h2>
    <form onSubmit={editUser}>
    <div className='row form-group' >
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
     <button className="btn btn-light" type='submit'>Update Profile Info</button>
    </div>
    </form>
    </div>

  );
}


export default EditProfile;
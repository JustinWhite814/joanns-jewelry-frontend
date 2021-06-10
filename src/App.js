// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import { Context } from './components/Context'
import Authenticate from './components/Authenticate'
import Homepage from './components/Homepage'
import axios from 'axios';
import Bracelets from './components/Bracelet';
import Rings from './components/Rings';
import Chains from './components/Chains';
import Earrings from './components/Earrings';
import Header from './components/Navigation/Header'

function App() {
  const baseURL = 'http://localhost:4000/jewels'
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})
  const [jewels, setJewels] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  const getJewels = async () => {
  await axios.get(baseURL)
  .then(res => {
    setJewels(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
    
  useEffect(()=> getJewels(), [])
  return (
    <div className="App">
     <Header />
      <Switch>
      <Context.Provider value={{setUser,user,baseURL, jewels, setJewels, loggedIn, setLoggedIn}}>
      <Route exact path ='/' component={Homepage} />
      <Route exact path = '/authenticate' component={Authenticate} />
      <Route exact path ='/bracelets' component={Bracelets}/>
      <Route exact path ='/chains' component={Chains}/>
      <Route exact path ='/earrings' component={Earrings}/>
      <Route exact path ='/rings' component={Rings}/>
      </Context.Provider>
      </Switch>
    </div>
  );
}

export default App;

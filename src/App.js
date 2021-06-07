// import logo from './logo.svg';
import './App.css';
import React, {useState, useContext, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import { Context } from './components/Context'
import Landing from './components/Landing'
import SideBar from './components/Sidebar'
import Homepage from './components/Homepage'
import axios from 'axios';

function App() {
  const baseURL = 'http://localhost:4000/jewels'
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})
  const [jewels, setJewels] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const getJewels = async () => {
    await axios.get(baseURL)
    .then(res => {
      console.log(res.data)
      setJewels(res.data)
    }).catch(err => {
      console.log('request failed')
      console.log(err)
    })
  }
  useEffect(()=> {getJewels()},[])
  return (
    <div className="App">
     
      <Switch>
      <Context.Provider value={{baseURL, user, setUser, jewels, setJewels, getJewels, loggedIn, setLoggedIn}}>
      <Route exact path = '/' component={Landing}/>
      <Route exact path = '/sidebar' component={SideBar}/>
      <Route exact path ='/homepage' component={Homepage} />
      </Context.Provider>
      </Switch>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import { Context } from './components/Context'
import Landing from './components/Landing'
import SideBar from './components/Sidebar'
import Homepage from './components/Homepage'
import axios from 'axios';
import Bracelets from './components/Bracelet';
import Rings from './components/Rings';
import Chains from './components/Chains';
import Earrings from './components/Earrings';

function App() {
  const baseURL = 'http://localhost:4000/jewels'
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})
  const [jewels, setJewels] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState('')
  
    
  return (
    <div className="App">
     
      <Switch>
      <Context.Provider value={{setData, setUser,user,baseURL, jewels, setJewels, loggedIn, setLoggedIn}}>
      <Route exact path = '/' component={Landing} />
      <Route exact path = '/sidebar' component={SideBar}/>
      <Route exact path ='/homepage' component={Homepage} />
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

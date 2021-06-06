// import logo from './logo.svg';
import './App.css';
import React, {useState, useContext} from 'react'
import {Route, Switch} from 'react-router-dom'
import { Context } from './components/Context'
import Landing from './components/Landing'
import SideBar from './components/Sidebar'

function App() {
  const baseURL = 'http://localhost:4000'
  const [user, setUser] = useState({})
  const [jewels, setJewels] = useState([])
  return (
    <div className="App">
      <Switch>
      <Route exact path = '/' component={Landing}/>
      <Route exact path = '/sidebar' component={SideBar}/>
      </Switch>
    </div>
  );
}

export default App;

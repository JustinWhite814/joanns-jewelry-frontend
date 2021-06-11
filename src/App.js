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
import Cart from './components/Cart'

function App() {
  const baseURL = 'https://joansjewelrybackend.herokuapp.com/jewels'
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})
  const [jewels, setJewels] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1 }: x 
        )
      )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1 }: x 
        )
      )
    }
  }

  const getJewels = async () => {
  await axios.get(baseURL)
  .then(res => {
    setJewels(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  async function updateJewel (jewelId, newContent) {
    const url = `${baseURL}/posts/${jewelId}`
    const updatedJewels = await axios.put(url, newContent)
    setJewels(updatedJewels.data)
  }
    
  useEffect(()=> getJewels(), [])
  return (
    <div className="App">
     <Header />
      <Switch>
      <Context.Provider value={{onRemove, onAdd,cartItems, setCartItems,setUser,user,baseURL, jewels, setJewels, loggedIn, setLoggedIn, updateJewel}}>
      <Route exact path ='/' component={Homepage} />
      <Route exact path ='/cart' component={Cart} />
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

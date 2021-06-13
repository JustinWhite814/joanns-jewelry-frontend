import './App.css';
import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import { Context } from './components/Context'
import Homepage from './components/Homepage'
import Registration from './components/Forms/Registration'
import AboutUs from './components/About/AboutUs'
import Bracelets from './components/Jewelry/Bracelets';
import Rings from './components/Jewelry/Rings';
import Chains from './components/Jewelry/Chains';
import Earrings from './components/Jewelry/Earrings';
import Header from './components/Navigation/Header'
import Cart from './components/Stretch/Cart'
import axios from 'axios';
function App() {
  // const baseURL = 'https://joansjewelrybackend.herokuapp.com/jewels'
  const baseURL = 'http://localhost:4000/jewels'
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})
  const [jewels, setJewels] = useState([])
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const [cartItems, setCartItems] = useState([])


  // Potential Cart: Isn't fully functioning at this time
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
    })
     .catch(err => {
     console.log('request failed')
     console.log(err)
    })
  }  
  
  const updateJewel = async (jewelId, newContent) => {
    const url = `${baseURL}/jewels/${jewelId}`
    const updatedJewels = await axios.put(url, newContent)
    setJewels(updatedJewels.data)
  }
    
  useEffect(()=> getJewels(), [])

  return (
    <div className="App">
     <Header />
      <Switch>
        <Context.Provider value={{onRemove, onAdd,cartItems, setCartItems,setUser,user,baseURL, jewels, setJewels, isloggedIn, setIsLoggedIn, updateJewel}}>
          <Route exact path ='/' component={Homepage} />
          <Route exact path ='/about' component={AboutUs} />
          <Route exact path ='/cart' component={Cart} />
          <Route exact path ='/registration' component={Registration} />
          <Route exact path ='/bracelets' component={Bracelets}/>
          <Route exact path ='/chains' component={Chains}/>
          <Route exact path ='/earrings' component={Earrings}/>
          <Route exact path ='/rings' component={Rings}/>
        </Context.Provider>
      </Switch>
    </div>
  )
}

export default App;

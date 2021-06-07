import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';


function Bracelets(props) {
  const {user, jewels, baseURL} = useContext(Context)
  const [bracelets, setBracelets] = useState([])
  const getBracelets = async () => {
  const url = `${baseURL}/bracelets`
  await axios.get(url)
  .then(res => {
    console.log(res.data)
    setBracelets(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getBracelets()}, [])
  console.log(bracelets)
  let sortedBracelets = [...bracelets].reverse()
  const braceletsShow = sortedBracelets.map(bracelets => {
    return (
      <div key={bracelets._id}>
        <h2>{bracelets.title}</h2>
        <h2>{bracelets.price}</h2>
        <img src={bracelets.image} alt={bracelets.title} />
        <h2>{bracelets.availability}</h2>
      </div>
    )
  })
  return (
    <div>
      {braceletsShow}
    </div>
  );
}

export default Bracelets;
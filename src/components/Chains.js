import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import axios from 'axios';

function Chains(props) {
  const {baseURL} = useContext(Context)
  const [chains, setChains] = useState([])
  const getChains = async () => {
  const url = `${baseURL}/chains`
  await axios.get(url)
  .then(res => {
    console.log(res.data)
    setChains(res.data)
  }).catch(err => {
    console.log('request failed')
    console.log(err)
  })
  }  
  
  useEffect(()=> {getChains()}, [])
  console.log(chains)
  let sortedChains = [...chains].reverse()
  const chainsShow = sortedChains.map(chains => {
    return (
      <div key={chains._id}>
        <h2>{chains.title}</h2>
        <h2>{chains.price}</h2>
        <img src={chains.image} alt={chains.title} />
        <h2>{chains.availability}</h2>
      </div>
    )
  })
  return (
    <div>
      {chainsShow}
    </div>
  );
}

export default Chains;
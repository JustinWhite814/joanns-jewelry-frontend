import React, { useContext } from 'react';
import {Context} from '../Context'

const Cart = () => {
  const {cartItems, onAdd, onRemove} = useContext(Context)

  return (
    <div>
      <h2>{cartItems.length === 0 && <div>Coming Soon...</div>}</h2>
      {cartItems.map((item)=> (
        <div key={item.id} className='row'>
          <div>{item.price}</div>
          <div>{item.title}</div>
          <div>
          <button onClick={()=> onAdd(item)} className='add'>+</button>
          <button onClick={()=> onRemove(item)} className='remove'>-</button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
        
      ))}
    </div>
  );
}

export default Cart;
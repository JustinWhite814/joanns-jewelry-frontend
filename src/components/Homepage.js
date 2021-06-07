import React from 'react';
import Rings from './Rings'
import Chains from './Chains'
import Earrings from './Earrings'
import Bracelets from './Bracelet'
function homepage(props) {
  return (
    <div>
      <Rings />
      <Chains />
      <Earrings />
      <Bracelets />
    </div>
  );
}

export default homepage;
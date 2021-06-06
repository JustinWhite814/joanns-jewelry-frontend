import React from 'react';
import Rings from './Rings'
import Bracelets from './Bracelet'
import Chains from './Chains'
import Earrings from './Earrings'
function Sidebar(props) {
  return (
    <div>
      <Rings />
      <Bracelets />
      <Chains />
      <Earrings />
    </div>
  );
}

export default Sidebar;
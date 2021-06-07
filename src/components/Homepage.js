import React from 'react';
import { Link, Redirect } from 'react-router-dom'
function homepage(props) {
  return (
    <div>
      <Link to={'/rings'} ><button>rings</button></Link>
      <br />
      <Link to={'/chains'}><button>chains</button></Link>
      <br />
      <Link to={'/earrings'}><button>earrings</button></Link>
      <br />
      <Link to={'/bracelets'}><button>bracelets</button></Link>
      <br />
    </div>
  );
}

export default homepage;
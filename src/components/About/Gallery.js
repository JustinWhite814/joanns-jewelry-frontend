import React from 'react';
import angelicaBracelets from '../Gallery/angelicaBracelets.jpeg'
import Bulovas from '../Gallery/bulovas.jpeg'
import Christmas from '../Gallery/Christmas.jpeg'
import Diamonds from '../Gallery/Diamonds.jpeg'
import Earrings from '../Gallery/Earrings.jpeg'
import Family from '../Gallery/Family.jpeg'
import heartBeat from '../Gallery/HeartBeat.jpeg'
import heartNecklace from '../Gallery/heartNecklace.jpeg'
import heartRings from '../Gallery/heartRings.jpeg'
import window from '../Gallery/MikesWindow.jpeg'
import moreWatches from '../Gallery/moreWatches.jpeg'
import neckLace from '../Gallery/Necklace.jpeg'
import outSide from '../Gallery/outside.jpeg'
import watches from '../Gallery/watches.jpeg'
import newWindow from '../Gallery/newWindow.jpeg'
import Grid from '@material-ui/core/Grid'

const Gallery = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <img className = 'gallery' src={angelicaBracelets} alt="angelica"/>
          <img className = 'gallery' src={Bulovas} alt="bulovas"/>
          <img className = 'gallery' src={watches} alt="watches"/>
          <img className = 'gallery' src={outSide} alt="outside"/>
          <img className = 'gallery' src={moreWatches} alt="moreWatches"/>
          <img className = 'gallery' src={window} alt="window"/>
          <img className = 'gallery' src={Christmas} alt="Christmas"/>
          <img className = 'gallery' src={Diamonds} alt="Diamonds"/>
          <img className = 'gallery' src={Earrings} alt="Earrings"/>
          <img className = 'gallery' src={Family} alt="Family"/>
          <img className = 'gallery' src={heartBeat} alt="heartBeat"/>
          <img className = 'gallery' src={heartNecklace} alt="heart necklace"/>
          <img className = 'gallery' src={heartRings} alt="heart ring"/>
          <img className = 'gallery' src={neckLace} alt="necklace"/>
          <img className = 'gallery' src={newWindow} alt="new window"/>
      </Grid>
      </Grid>
    </div>
  );
}

export default Gallery;
import React from "react";
import cardstyle from "../Cards/Cards.module.css";
import pic1 from '../Images/fishing-line.jpg'
import pic2 from '../Images/tear-drop.jpg';
import pic3 from '../Images/lastic-thread.jpg'
import pic4 from '../Images/sequence.jpg'
import pic5 from '../Images/stopper bead.jpg'
import pic6 from '../Images/thunder-crystal-beads.jpg'

import Card from './Card'
function Cards() {
  return (
    <div className={cardstyle.main}>
      <div className={cardstyle.card}>
        <Card  pic={pic1} text={'Fishing line'} price={20}/>
        <Card  pic={pic2} text={'Tear drop'} price={20}/>
        <Card  pic={pic3} text={'Lastic thread'} price={20}/>
        <Card  pic={pic4} text={'Sequence'} price={20}/>
        <Card  pic={pic5} text={'Stopper bead'} price={20}/>
        <Card pic={pic6} text={'Thunder crystal'} price={20}/>
       
        

      </div>
    </div>
  );
}

export default Cards;

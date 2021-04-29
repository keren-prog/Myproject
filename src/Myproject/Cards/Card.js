import React from "react";
import cardstyle from "../Cards/Cards.module.css";
import pic1 from '../Images/fishing-line.jpg'
import pic2 from '../Images/tear-drop.jpg';
import pic3 from '../Images/lastic-thread.jpg'
import pic4 from '../Images/sequence.jpg'
import pic5 from '../Images/stopper bead.jpg'
import pic6 from '../Images/thunder-crystal-beads.jpg'

function Card({price, text,pic}) {
  return (
   
     
    <div className={cardstyle.card1}>
    <div className={cardstyle.image6}>  
      <img className={cardstyle.image} src={pic} alt={""} />
    </div>
    <div className={cardstyle.text}>

       {text} <br/> GH₵ {price}
    
    </div>
  </div>



  );
}

export default Card;

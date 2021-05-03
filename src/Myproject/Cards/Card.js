import React from "react";
import cardstyle from "../Cards/Cards.module.css";

function Card({ price, text, pic }) {
  return (
    <div className={cardstyle.card1}>
      <div className={cardstyle.image6}>
        <img className={cardstyle.image} src={pic} alt={""} />
      </div>
      <div className={cardstyle.text}>
        {text} <br /> GH₵ {price}
      </div>
    </div>
  );
}

export default Card;

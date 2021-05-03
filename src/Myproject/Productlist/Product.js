import React from 'react'
import productliststyle from './ProductList.module.css';

function Product() {
    return (
    
             <div className={productliststyle.card1}>
      <div className={productliststyle.image6}>
        <img className={productliststyle.image} src={pic} alt={""} />
      </div>
      <div className={productliststyle.text}>
        {text} <br /> GH₵ {price}
      </div>
    </div>
    
    )
}

export default Product


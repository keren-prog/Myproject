import React from 'react'
import cartstyle from '../Cart/Cart.module.css'
import pix from '../Images/bicone.jpg'
import {Link} from 'react-router-dom'

function Cart() {
    return (
        <div className={cartstyle.main} >

           <h1 className={cartstyle.cart}>Shopping Cart</h1>


<div className={cartstyle.product}>
    <div className={cartstyle.pimage}>
      <img src={pix} alt='' className={cartstyle.shadow}/>
    </div>
    <div className={cartstyle.ptext}> Bicone crystal
    <div className={cartstyle.pprice}>99</div>
    <button className={cartstyle.pbutton}>Item in cart</button>
   
    <div className={cartstyle.checkout}>
    <Link to='/paymentform' >
   
    
  
      <button >Checkout</button>
      </Link>
       </div>
    </div>
  
    
   
   
  </div>

</div>
 
    

  /* <div className={cartstyle.totals}>
    <div className={cartstyle.titem}>
      <label>Subtotal</label>
      <div className={cartstyle.tvalue } className={cartstyle.csubtotal}>71.97</div>
    </div>
    <div className={cartstyle.titem}>
      
      <div className={cartstyle.tvalue} className={cartstyle.ctax}>3.60</div>
    </div>
    <div className={cartstyle.titem}>
      <label>Shipping</label>
      <div className={cartstyle.tvalue} className={cartstyle.cshipping}>15.00</div>
    </div>
    <div className={cartstyle.titem}>
      <label>Grand Total</label>
      <div className={cartstyle.tvalue} className={cartstyle.ctotal}>90.57</div>
    </div>
  </div>
  
  </div> */

    //   <div className={cartstyle.checkout}>
    //   <button >Checkout</button>
    //   </div>
     

 
       
    )
}

export default Cart;

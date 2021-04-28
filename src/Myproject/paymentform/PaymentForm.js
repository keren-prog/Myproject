import paymentformstyle from './PaymentForm.module.css'

function PaymentForm (){
    return(
        
        <div className={paymentformstyle.container}>
  <div className={paymentformstyle.title} >
      <h2>Product Order Form</h2>
  </div>
<div className={paymentformstyle.dflex}>
  <form action="" method="">
    <label>
      <span className={paymentformstyle.fname}>First Name <span className={paymentformstyle.required}>*</span></span>
      <input type="text" name="fname"/>
    </label>
    <label>
      <span className={paymentformstyle.lname}>Last Name <span className={paymentformstyle.required}>*</span></span>
      <input type="text" name="lname"/>
    </label>
    <label>
      <span>Company Name (Optional)</span>
      <input type="text" name="rn"/>
    </label>
    <label>
      <span>Region <span className={paymentformstyle.required}>*</span></span>
      <select name="selection">
        <option value="select">Select a Region...</option>
        <option value="AR">Ashanti</option>
        <option value="CR">Central</option>
        <option value="ER">Eastern</option>
        <option value="WR">Western</option>
        <option value="GR">Greater Accra</option>
        <option value="UER">Upper East</option>
        <option value="UWR">Upper West</option>
        <option value="NER">North East</option>
        <option value="NR">Northern</option>
        <option value="SR">Savannah</option>
        <option value="OR">Oti</option>
        <option value="VR">Volta</option>
        <option value="BER">Bono East</option>
        <option value="BR">Bono</option> 
        <option value="AR">Ahafo</option>
        <option value="WNR">Western North</option>
      </select>
    </label>
    <label>
      <span>Street Address <span className={paymentformstyle.required} >*</span></span>
      <input type="text" name="houseadd" placeholder="House number or Digital address" required/>
    </label>
    {/* <label>
      <span>&nbsp;</span>
      <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
    </label> */}
    <label>
      <span>Town / City <span className={paymentformstyle.required} >*</span></span>
      <input type="text" name="city"/> 
    </label>
    {/* <label>
      <span>Region/City <span  className={paymentformstyle.required}>*</span></span>
      <input type="text" name="city"/> 
    </label> */}
    <label>
      <span>Postcode / ZIP <span className={paymentformstyle.required}>*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>Phone <span className={paymentformstyle.required}>*</span></span>
      <input type="tel" name="city"/> 
    </label>
    <label>
      <span>Email Address <span className={paymentformstyle.required} >*</span></span>
      <input type="email" name="city"/> 
    </label>
  </form>
  <div className={paymentformstyle.Yorder}>
    <table>
      <tr>
        <th colspan="2">Your order</th>
      </tr>
      <tr>
        <td>Product Name x 2(Qty)</td>
        <td>GHs 0.00</td>
      </tr>
      <tr>
        <td>Subtotal</td>
        <td>GHs 0.00</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Free shipping</td>
      </tr>
    </table><br/>
    <div>
      <input type="radio" name="dbt" value="dbt" checked/> Direct Bank Transfer
    </div>
    <p>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </p>
    <div>
      <input type="radio" name="dbt" value="cd"/> Cash on Delivery
    </div>
    <div>
      <input type="radio" name="dbt" value="cd"/> Paypal <span>
      <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
      </span>
    </div>
    <button type="button">Place Order</button>
  </div>
  {/* <!-- Yorder --/> */}
 </div>
</div>

//            <form >
//           <section>
//     <h2 className={paymentformstyle.card}>Payment information</h2>
//     <p>
//       <label for="card">
//         <span>Card type:</span>
//       </label>
//       <select id="card" name="usercard">
//         <option value="visa">Visa</option>
//         <option value="mc">Mastercard</option>
//         <option value="amex">American Express</option>
//         <option value="momo">Mobile Money</option>
//       </select>
//     </p>

//     <p>
//       <label for="number">
//         <span>Card number:</span>
//         <strong><abbr title="required">*</abbr></strong>
//       </label>
//       <input type="tel" id="number" name="cardnumber"/>
//     </p>
      
//     <p>
//       <label for="date">
//         <span>Expiration date:</span>
//         <strong><abbr title="required">*</abbr></strong>
//         <em>formatted as mm/dd/yyyy</em>
//       </label>
//       <input type="date" id="date" name="expiration"/>
//     </p>
// </section>
//           </form> 

       
    )
}

export default PaymentForm ;

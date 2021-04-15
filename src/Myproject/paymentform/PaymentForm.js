import './PaymentForm.css'

function PaymentForm (){
    return(
        <div>
<section>
    <h2>Payment information</h2>
    <p>
      <label for="card">
        <span>Card type:</span>
      </label>
      <select id="card" name="usercard">
        <option value="visa">Visa</option>
        <option value="mc">Mastercard</option>
        <option value="amex">American Express</option>
      </select>
    </p>

    <p>
      <label for="number">
        <span>Card number:</span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="tel" id="number" name="cardnumber"/>
    </p>
      
    <p>
      <label for="date">
        <span>Expiration date:</span>
        <strong><abbr title="required">*</abbr></strong>
        <em>formatted as mm/dd/yyyy</em>
      </label>
      <input type="date" id="date" name="expiration"/>
    </p>
</section>
        </div>
    )
}

export default PaymentForm ;

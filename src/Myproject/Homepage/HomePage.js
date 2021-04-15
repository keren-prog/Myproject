import './HomePage.css'
import Button from '../button'

function HomePage (){
    return (
        < div className='main'>
            <div>
            <section>
                 <nav>
                 <ul>
                     <li>HOME</li>
                     <li>ABOUT</li>
                 </ul>
                 </nav>
               
                 <h3>KAYNEX-LOOK ENTERPRISE</h3>
                 <nav>
                 <ul>
                     <li>PRODUCTS</li>
                     <li>CONTACT</li>
                     <li>  <Button/> 
                     {/* <button className='signupbutton'>Signup</button> */}
                      </li>
                      <li> <Button/> </li>
                 </ul>
                 </nav>
            </section>
            </div>
            
            <div>
            <input type='text' placeholder='electronic commerce website'></input>
            </div>
            
            
             <div className='bottomdiv'>
                <p>  <h1> Welcome to our page </h1></p>
             </div>
        </div>
       
    )
}
export default HomePage;
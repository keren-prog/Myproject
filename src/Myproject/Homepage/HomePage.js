import style from "./HomePage.module.css";
import signupstyle from "../Signup-form/Signup.module.css";
import { useHistory } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'

function HomePage() {
  let history = useHistory();
  console.log(history);

  function signup() {
    history.push("/signup");
  }

  function login() {
    history.push("/login");
  }

  return (
    <div className={style.main}>
    
         <Navbar login={login} signup={signup} />
         <Cards/>
        
              {/* <div className={style.searchContainer}>
                <i className={style.searchIcon}> </i>
                <input
                  className={style.searchBox}
                  type="search"
                  name="search"
                  placeholder="Search..."
                />
                <input
                  type="submit"
                  value="Search"
                  className={style.searchButton}
                /> */}
            
    

        <div className={style.quotediv}>
           <section className={style.quote1}>
            <h3> Quality craft materials</h3>
            <p>
             A local online market where people come together to buy, sell and collect unique materials 
            </p>
          </section>

          <section className={style.quote2}>
            <h3> Affordable pricing</h3>
            <p> We make the whole process easy, helping you connect directly with our store to find something extraordinary at an affordable price by order.</p>
          </section>
          <section className={style.quote3}>
            <h3> Trusted by businesses locally</h3>
            <p>
              KAYNEX handles everything from the odere stage to delivery and items ordered are exactly as seen.
            </p>
          </section> 
        </div>

        <div className={style.quote}>
          <p> "Your one stop shopping store</p>
        </div>
      
    </div>
    
  );
}
export default HomePage;

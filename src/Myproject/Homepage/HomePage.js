import style from "./HomePage.module.css";
import signupstyle from "../Signup-form/Signup.module.css";
import { useHistory } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { link } from "react-router-dom";

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
      {/* <Box
        w="100%"
        h="100%"

      
      > */}
        <div className={style.topdiv}>
          {/* <div className={style.heading}>
             <span className={style.look}>K</span>
            <span>A</span>
            <span>Y</span>
            <span>N</span>
            <span>E</span>
            <span>X</span>
            <span>-</span>
            <span>L</span>
            <span className={style.letter}></span>
            <span>O</span>
            <span>K</span> 
          </div> */}
        </div>

        <div className={style.list}>
          {/* <div className={style.div2}>
              <div className={style.searchContainer}>
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
                />
              </div>
            </div>

            {/* <nav className={style.menu}>
  <ol>
    <li className={style.menuitem}><a href="#0">Home</a></li>
    <li className={style.menuitem}><a href="#0">About</a></li>
    <li className={style.menuitem}>
      <a href="#0">Products</a>
      <ol className={style.submenu}>
        <li className={style.menuitem}><a href="#0">Accessories</a></li>
        <li className={style.menuitem}><a href="#0">Beads on fabric</a></li>
        <li className={style.menuitem}><a href="#0">Local beads</a></li>
      </ol>
    </li>
    <li className={style.menuitem}><a href="#0">Trending</a></li>
    <li className={style.menuitem}><a href="#0">Catalogue</a></li>
  </ol>
</nav> */}
          {/* <a href="#" className={style.linkscart}>
              {" "}
              CART{" "}
            </a>
            <a href="#" className={style.linksproducts}>
              {" "}
              PRODUCTS{" "}
            </a>
            <a href="#" className={style.linkscatalogue}>
              {" "}
              CATALOGUE{" "}
            </a>
            <a href="#" className={style.linkstrending}>
              {" "}
              TRENDING{" "}
            </a>

            <li>
              {" "}
              <Box
                onClick={signup}
                as="button"
                p={4}
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
                margin=" 10px"
                padding="10px 20px"
                textAlign=" center"
                transition="0.5s"
                backgroundSize=" 200% auto"
                color="white"
                boxShadow="0 0 20px #eee"
                borderRadius="10px"
                display="block"
                bgGradient="linear(to-r, blue.100,black.500)"
                _hover={{ bgGradient: "linear(to-r, black.500, blue.200)" }}
              >
                Signup
              </Box>{" "}
            </li>

            <li>
              {" "}
              <Box
                onClick={login}
                as="button"
                p={4}
                color="white"
                fontWeight="bold"
                borderRadius="md"
                textTransform="uppercase"
                margin=" 10px"
                padding="10px 20px"
                textAlign=" center"
                transition="0.5s"
                backgroundSize=" 200% auto"
                color="white"
                boxShadow="0 0 20px #eee"
                borderRadius="10px"
                display="block"
                bgGradient="linear(to-r, blue.100,black.500)"
                _hover={{
                  bgGradient: "linear(to-r, black.500, blue.500)",
                }}
              >
                Login
              </Box>{" "}
            </li>  */}
        </div>

        <div className={style.cards}>
          {/* <div className={style.container}>
            <div className={style.overlay}>
              <div className={style.items}></div>
              <div className={style.itemshead}>
                <p> Dynamic Purple Headpiece</p>
                <hr className={style.hr} />
              </div>
              <div className={style.itemsprice}>
                <p className={style.new}>GHs 50</p>
              </div>
              <div className={style.itemscart}>
                <i className={style.shoppingcart}></i>
                <span>ADD TO CART</span>
              </div>
            </div>
          </div>
          <h6>cards</h6> */}
        </div>

        <div className={style.cards2}>
          {/* <div className={style.container2}>
            <div className={style.overlay}>
              <div className={style.items}></div>
              <div className={style.itemshead}>
                <p> Crystal Red Earring</p>
                <hr className={style.hr} />
              </div>
              <div className={style.itemsprice}>
                <p className={style.new}>GHs 20</p>
              </div>
              <div className={style.itemscart}>
                <i className={style.shoppingcart}></i>
                <span className={style.addtocart}>ADD TO CART</span>
              </div>
            </div>
          </div> */}

          {/* <h6>cards2</h6> */}
        </div>

        <div className={style.quotediv}>
          <section className={style.quote1}>
            <p> Quality beaded craft</p>
            <p>
              We publish trending beaded crafts uniquely designed to fit. using
              products that stand the test of time. Customers' specifications
              are met in terms of description; color, weight, size
            </p>
          </section>

          <section className={style.quote2}>
            <p> Affordable pricing</p>
            <p> Products pricing are not outrageous</p>
          </section>
          <section className={style.quote3}>
            <p> Trusted by over 1,700,000 businesses worldwide</p>
            <p>
              Shopify handles everything from marketing and payments, to secure
              checkout and shipping
            </p>
          </section>
        </div>

        <div className={style.quote}>
          <p> "Your one stop shopping store</p>
        </div>
      {/* </Box> */}
    </div>
  );
}
export default HomePage;

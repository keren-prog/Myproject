import React from "react";
import navbarstyle from "../Navbar/Navbar.module.css";
import { Box } from "@chakra-ui/react";

function Navbar({login ,signup}) {
  return (
    <div className={navbarstyle.main}>
      <div className={navbarstyle.heading}>
         <span className={navbarstyle.look}>K</span>
        <span>A</span>
        <span>Y</span>
        <span>N</span>
        <span>E</span>
        <span>X</span>
        <span>-</span>
        <span>L</span>
        <span className={navbarstyle.letter}></span>
        <span>O</span>
        <span>K</span> 
      </div>

      <div className={navbarstyle.nav}>
       <li className={navbarstyle.lists}>
        <a href="#" className={navbarstyle.linkscart}>
          {" "}
          CART{" "}
        </a>
      </li>
      <li className={navbarstyle.lists}>
        <a href="#" className={navbarstyle.linksproducts}>
          {" "}
          PRODUCTS{" "}
        </a>
      </li>
      <li className={navbarstyle.lists}>
        <a href="#" className={navbarstyle.linkscatalogue}>
          {" "}
          CATALOGUE{" "}
        </a>
      </li>
      <li className={navbarstyle.lists}>
        <a href="#" className={navbarstyle.linkstrending}>
          {" "}
          TRENDING{" "}
        </a>
      </li>

      <li className={navbarstyle.lists}>
        {" "}
        <Box
          onClick={signup}
          as="button"
          p={4}
          color="white"
          fontWeight="bold"
          textTransform="uppercase"
          margin=" 10px"
          padding="2px 10px"
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

      <li className={navbarstyle.lists}>
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
          padding="2px 10px"
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
      </li> 
      </div>
      <div className={navbarstyle.text}>
          <h2 className={navbarstyle.introtext}>A Multi-Vendor E-commerce site <br/> to get your fashion materials<br/>ready for work. </h2>  
      </div>
    </div>
  );
}

export default Navbar;

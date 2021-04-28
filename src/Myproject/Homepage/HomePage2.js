import React from 'react'
import style from './HomePage2.module.css'


function HomePage2() {
    return (
        <div className={style.maindiv}>
            <div className={style.div1}> KAYNEX-LOOK </div>
<div className={style.div2}>NAV BAR 

<div className={style.searchContainer}>
  <i className={style.searchIcon}> </i>
  <input className={style.searchBox} type="search" name="search" placeholder="Search..."/>
  <input type="submit" value="Search" className={style.searchButton}/>  
</div>
{/* <li>  
   <Box
                        // onClick={login}
                        as="button"
                        p={4}
                        color="white"
                        fontWeight="bold"
                        borderRadius="md"
                        textTransform="uppercase"
                        margin=" 10px"
                        padding= "10px 20px"
                        textAlign=" center"
                        transition= "0.5s"
                        backgroundSize=" 200% auto"
                        color= "white"            
                        boxShadow= "0 0 20px #eee"
                        borderRadius= "10px"
                        display= "block"
                        bgGradient="linear(to-r, teal.500,green.500)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)", }} >
                       Login
                      </Box>  </li> */}

 </div>
<div className={style.div3}> CARD AREA </div>
<div className={style.div4}>  CARD AREA</div>
<div className={style.div5}>  </div>
<div className={style.div6}> SLOGAN </div>
        </div>
    )
}

export default HomePage2;

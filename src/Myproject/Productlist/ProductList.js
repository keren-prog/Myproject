import React from 'react';
import {useHistory} from 'react-router-dom'
import Card from '../Cards/Card'
import Cards from '../Cards/Cards'
import productliststyle from '../Productlist/ProductList.module.css'
import pic7 from '../Images/dynamic-crystal.jpg';
import pic8 from '../Images/bicone.jpg';
import pic9 from '../Images/red-crystal.jpg';
import pic10 from '../Images/square-crystal.jpg';
import pic11 from '../Images/white-crystal.jpg';
import pic12 from '../Images/curved-plier.jpg';
import pic13 from '../Images/fishing-line-stopper.jpg';
import pic14 from '../Images/plier.jpg';
import pic15 from '../Images/Round-Nose-Pliers.jpg';
import pic16 from '../Images/bicone.jpg';
import pic17 from '../Images/bicone.jpg';
import pic18 from '../Images/bicone.jpg';
import pic19 from '../Images/bicone.jpg';
import pic20 from '../Images/bicone.jpg';




function ProductList(props) {
    let history = useHistory()
        
      
    return (
       
        <div className={productliststyle.main}>
            <Cards/>
             <div className={productliststyle.card}>
               
        
        <Card pic={pic7} text={'Dynamic crystal'} price={10}/>
        <Card pic= {pic8} text={'Bicone'} price={10}/>
        <Card pic= {pic9} text={'Red Crystal'} price={10}/>
        <Card pic= {pic10} text={'Square Crystal'} price={10}/>
        <Card pic= {pic11} text={'White Crystal'} price={10}/>
        <Card pic= {pic12} text={'Curved Plier'} price={10}/>
        <Card pic= {pic13} text={'Fishing Line stopper'} price={10}/>
        <Card pic= {pic14} text={'Plier'} price={10}/>
        <Card pic= {pic15} text={'Round Nose Plier'} price={10}/>

       </div>
       </div>
    )
}

export default ProductList

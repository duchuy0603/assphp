import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductApi from '../../api/ProductApi'
import Routers from '../../Routers';
import { NavLink } from 'react-router-dom';
const ProductDetailPage = ({todos}) => {
  const {id}=useParams();
  
 
  const { 0: product} = todos.filter((item) => item._id === id);
  console.log(product)
    return (
        <div>
             <div className=" item " >
               
               <div className="  sp " >
               <NavLink className="Link" to={"/product/"+ product._id}><img src={"http://localhost:4000/api/products/photo/"+product._id} height="250px" width="230"></img></NavLink>
             <div className="product-name">{product.name}</div>
             <NavLink className="Link" to=""><span>{product.price}$</span></NavLink>
             <br/>
             <button className="btn-cart"> Mua Ngay</button>
           </div>
       </div>
    
        </div>
        
    )
}

export default ProductDetailPage

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductApi from '../../api/ProductApi'
import Routers from '../../Routers';
import { NavLink } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

import { useCart } from 'react-use-cart';


const ProductDetailPage = ({todos}) => {
  const {id}=useParams();
  const history=useHistory();
 const{addItem}= useCart();
  const { 0: product} = todos.filter((item) => item._id ===id);
   
  console.log(product);
    return (
        <div>
             <div className=" row " >
               <div className="col-md-8 detail-image">
               
               <NavLink className="Link" to={"/product/"+ product._id}><img src={"http://localhost:4000/api/products/photo/"+product._id} height="550px" width="430"></img></NavLink>
               </div>
               <div className=" col-md-4  " >
            
             <h2>{product.name}</h2>
             <h4>Mô Tả:</h4>
             
             <div className="product-name">{product.description}</div>
             <h4>Giá Bán:</h4>
             <NavLink className="Link" to=""><span  className="price">{product.price}$</span></NavLink>
             <br/>
             <button className="btn btn-danger btn-cart" id="btn-cart" onClick={()=>addItem(product)} > Mua Ngay</button>
           </div>
       </div>
    
        </div>
        
    )
}

export default ProductDetailPage
{/* <div className=" row " >
      {product.map((item,index)=>{
        return(
          <Itemcart image={item.image} name={item.name} price={item.price} description={item.description } key={index} />
        )
       
      })}

      </div> */}
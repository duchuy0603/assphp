import React from "react";
import { NavLink } from "react-router-dom";
import {useCart} from 'react-use-cart'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Itemcart=({props})=>{
    const{addItem}=useCart();
    const {id}=useParams();
    return(
        <div>
                   
              
            
                   <div className="col-md-3   col-sm-4 sp " >
                                {/* <NavLink className="Link" to={"/product/" + props.id}><img src={"http://localhost:4000/api/products/photo/" + props.id} height="250px" width="230"></img></NavLink> */}
                                <div className="product-name">{props.name}</div>
                                <Link className="Link" to=""><span>{props.price}$</span></Link>
                                <button className="btn btn-danger btn-cart" id="btn-cart" onClick={()=>addItem(props.item)} > Mua Ngay</button>
                            </div>
        </div>
    )
}
export default Itemcart;
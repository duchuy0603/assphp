import React from "react";
import{useCart} from "react-use-cart";
import { useParams } from 'react-router';


const Cart=()=>{
    const{
        isEmpty,
    totalUniqueItems,
    
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
    }=useCart();

    
    console.log(items);
    if(isEmpty) return <h1 className="text-danger">you cart isEmpty</h1>
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5> Cart ({totalUniqueItems}) total Items:({totalItems}) </h5>
                    <table className="">
                    {items.map((item,)=>{
                      
                        <tbody tiem={item} key={item.id}>
                        <tr >
                       
                            <td>
                            <img src={"http://localhost:4000/api/products/photo/" + item.id} alt="" height="120px" width="110px" />
               
                            </td>
                            <td>
                            {item.name}
                            </td>
                            <td>
                           {item.price}
               
                            </td>
                            <td>
                           {item.quantity}
               
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>updateItemQuantity(item._id,item.quantity -1)} >-</button>
                                <button className="btn btn-primary" onClick={()=>updateItemQuantity(item._id,item.quantity +1)} >+</button>
                                <button className="btn btn-danger" onClick={()=>removeItem(item._id)} >Delete</button>
                            </td>
                            
                           
                        </tr>
                        </tbody>
                     
                    })}
                       </table>
                       <div className="col-auto ms-auto">
                           <h2>Total Price:${cartTotal}</h2>
                       </div>
                       <div className="col-auto">
                          <button className="btn btn-danger" onClick={()=>emptyCart()}>Clear cart</button>
                          <button className="btn btn-primary" >Buy Now</button>
                       </div>
                </div>
            </div>
        </section>
    );
}
export default Cart;
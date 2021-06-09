import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Page = ({todos,listcate}) => {
    return (
        <div>
            <div className="page">
            <div className="side-bar mt-4 mx-2">
{listcate.map((btn,index)=>(
 
    <NavLink className="Link" to=""><button className="form-control mt-1 btn-menu" key={index}>{btn.name}</button></NavLink>
))}
            </div>
      
      {todos.map((product,index)=>(
        
            <div className=" item">
               
                    <div className=" form-control sp " key={index}>
                    <NavLink className="Link" to={"/product/"+ product._id}><img src={"http://localhost:4000/api/products/photo/"+product._id} height="250px" width="230"></img></NavLink>
                  <div className="product-name">{product.name}</div>
                  <Link className="Link" to=""><span>{product.price}$</span></Link>
                </div>
            </div>
            ))}
 
            </div>
        </div>
    )
}

export default Page

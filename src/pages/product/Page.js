import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Page = ({ todos, listcate }) => {

    return (
        <div>
            <div className="row ">
                <div className="col-md-3">
                    {listcate.map((btn, index) => (

                        <NavLink className="Link" to={`/category/${btn._id}`}><button className="form-control mt-1 btn-menu" key={index}>{btn.name}</button></NavLink>
                    ))}
                </div>
            
                    <div className=" col-md-9 ">
                  
                        <div className="row">
                        {todos.map((product, index) => (



                            <div className="col-md-3   col-sm-4 sp " key={index}>
                                <NavLink className="Link" to={"/product/" + product._id}><img src={"http://localhost:4000/api/products/photo/" + product._id} height="250px" width="230"></img></NavLink>
                                <div className="product-name">{product.name}</div>
                                <Link className="Link" to=""><span>{product.price}$</span></Link>z
                            </div>

                        ))}
                        </div>
                    
                </div>
            </div>
        </div>

      
    )
}

export default Page

import React from 'react'
import ProductApi from '../../api/ProductApi'

import { Link, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const CategoryPage = ({todos,listcate}) => {
    console.log(todos)
    const {id}=useParams();

const result=todos.filter(product=>product.categoryId==id);

    return (
        <div>
            <div className="row">
            <div className="col-md-3">
                    {listcate.map((btn, index) => (

                        <NavLink className="Link" to={`/category/${btn._id}`}><button className="form-control mt-1 btn-menu" key={index}>{btn.name}</button></NavLink>
                    ))}
                </div>
                <div className="col-md-9">
                <div className="row">
           {result.map((product,index)=>(
            <div className="col-md-3 ">
                    <div className="  sp" key={index}>
                    <NavLink to={"/product/"+ product._id}><img src={"http://localhost:4000/api/products/photo/"+product._id} height="250px" width="230"></img></NavLink>
                  <div className="product-name">{product.name}</div>
                  <Link  to=""><span className="Link">{product.price}$</span></Link>
                </div>
            </div>
           
            ))} 
             </div>
             </div>
            </div>
        </div>
    )
}

export default CategoryPage;

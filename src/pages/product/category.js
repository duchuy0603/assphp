import React from 'react'
import ProductApi from '../../api/ProductApi'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const CategoryPage = (props) => {
    const {id}=useParams();
    console.log(props)
   
// const result=products.filter(product=>product.categoryId===id);

    return (
        <div>
           {/* {result.map((product,index)=>(
            <div className="item">
                    <div className=" form-control sp" key={index}>
                    <NavLink to={"/product/"+ product._id}><img src={"http://localhost:4000/api/products/photo/"+product._id} height="250px" width="230"></img></NavLink>
                  <div className="product-name">{product.name}</div>
                  <Link  to=""><span>{product.price}$</span></Link>
                </div>
            </div>
            ))} */}
        </div>
    )
}

export default CategoryPage

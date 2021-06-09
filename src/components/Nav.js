
import React from 'react'
import { NavLink } from 'react-router-dom'
import { authenticate } from '../auth';
const Nav = () => {
    var user=localStorage.getItem('role');
 
  
    if(user==0){
        var admin= document.querySelectorAll('#admin');
        admin.forEach(elm=>{
            elm.classList.add('hiden');
        })
    }
    else if(user==1){
        var admin= document.querySelectorAll('#admin');
        admin.forEach(elm=>{
            elm.classList.add('show');
        })
    }
  
    console.log(user)
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <NavLink className="nav-link active"  aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link admin"id="admin" to="admin/listpro">Product</NavLink>
            </li>
            <li className="nav-item admin">
                <NavLink className="nav-link"id="admin" to="admin/listcate">category</NavLink>
            </li>
            <li className="nav-item admin">
                <NavLink className="nav-link" to="product">page</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className="nav-link" to="/category/:id">danh muc</NavLink>
            </li> */}
            
            
       
        </ul>
    )
}


export default Nav;

import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import UserApi from '../api/UserApi'

const User = () => {
  var name= localStorage.getItem("name");
 
let history=useHistory()
var user=localStorage.getItem('user')
 async function dangxuat(){
localStorage.clear();
await UserApi.signout();
history.push('/user/:id')
  }
    return (
    
        <div>
          <div className="form-group dkdn">
          <span className="username">{name}</span>
          <button className="btn btn-primary" ><NavLink className="nav-link" to="/user/:id">signin</NavLink></button>

          <button className="btn btn-danger "id="out" ><NavLink className="nav-link " to="/user" onClick={()=>dangxuat()}>signout</NavLink></button>
         
          </div>
         
       
        
        </div>
    )
    
}

export default User;

import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import Search from './Search'
const Headeradmin = () => {
    return (
        <div>
                <header>
        {/* Fixed navbar */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Nguyễn Đức Huy</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="admin/listpro">Product</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="admin/listcate">category</NavLink>
            </li>
            
       
        </ul>
             
       
            </div>
          </div>
        </nav>
      </header>
        </div>
    )
}

export default Headeradmin

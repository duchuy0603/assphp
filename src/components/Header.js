import React from 'react'
import Nav from './Nav';
import Search from './Search';
import User from './User';
import Slide from './Slide';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Header = () => {
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
              <Nav />
              <User />
              <Link className="nav-link " to="/cart">  <span class="material-icons-outlined">
                local_mall
              </span></Link>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header

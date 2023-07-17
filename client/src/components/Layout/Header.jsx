import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <NavLink to="/" className="navbar-brand" href="#">Hidden brand</NavLink>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link" href="#">Link</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/" className="nav-link disabled" href="#">Disabled</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    </>
  )
}

export default Header
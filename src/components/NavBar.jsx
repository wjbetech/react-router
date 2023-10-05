import React from 'react'
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min"

const NavBar = () => {
  return (
    <nav>
      {/* Link tags don't force re-render */}
      <Link to="/">
        <h1>Monster Articles</h1>
      </Link>
      {/* Link tags render as <a> tags */}
      <div className="links">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/monsters">Monsters</NavLink>
        <NavLink exact to="/about">About</NavLink>
        <NavLink exact to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default NavBar

import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🍴 Yumoria
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/favorites">
          ❤️ Favorites
        </Link>

      </div>

    </nav>
  )
}

export default Navbar
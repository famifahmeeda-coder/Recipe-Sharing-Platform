import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

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

        {token ? (
          <button onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  )
}

export default Navbar
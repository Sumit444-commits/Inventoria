import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import CartIcon from "./CartIcon";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { currUser, setCurrUser,setCart,setCartCount } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => setMenuOpen(!menuOpen);


    const handleLogout = () => {
      localStorage.removeItem("currUser");
      setCurrUser({ name: "", email: "", status: false });
      setCart([]);
      setCartCount(0);
      navigate("/")
      setDropdownOpen(false);
};


  const navLinkClass = ({ isActive }) =>
    `text-lg font-medium transition hover:text-blue-900 ${
      isActive ? "text-blue-900 underline" : "text-gray-800"
    }`;

  const usernameInitial = currUser?.email?.[0]?.toUpperCase() || "?";

  return (
    <header className="bg-white w-full shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-900">
          Inventoria
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {!currUser?.status ? (
            <>
              <NavLink to="/login" className={navLinkClass}>Login</NavLink>
              <NavLink to="/register" className={navLinkClass}>Sign Up</NavLink>
            </>
          ) : (
            <>
            <NavLink to="/cart" className="relative">
            <CartIcon />
            </NavLink>

            <div
              className="relative"
              onClick={()=> setDropdownOpen(!dropdownOpen)}
            >
              <div className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold cursor-pointer">
                {usernameInitial}
              </div>

              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-blue-500 shadow-md border rounded-md w-32 text-center z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 text-sm hover:bg-blue-800 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            </>
            
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-blue-900" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white shadow-md">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass} onClick={toggleMenu}>Products</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>
          
          {!currUser?.status ? (
            <>
              <NavLink to="/login" className={navLinkClass} onClick={toggleMenu}>Login</NavLink>
              <NavLink to="/register" className={navLinkClass} onClick={toggleMenu}>Sign Up</NavLink>
            </>
          ) : (
            <>
            <NavLink to="/cart" className="flex items-center gap-2" onClick={toggleMenu}>
            <CartIcon />
            <span className="text-gray-800">Cart</span>
          </NavLink>

            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="text-left text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

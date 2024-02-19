// import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="sticky container mx-auto p-2 flex flex-row justify-between items-center border">
        {/* Logo */}
        <div>
          <Link to="/" className="py-1.5">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              width={150}
              alt=""
            />
          </Link>
        </div>

        {/* Menus */}
        <div className="hidden space-x-4 flex flex-row  font-semibold md:block">
          <NavLink
            to="/"
            //                 Observe how Navlink is written …
            // 1. Navlink chya className madhe ek prop aplyala miltay which is isActive jecha use
            // aapn current route active ahe ki nahi te tharavto
            // 2. isActive asel tr styling kasha detat eka ternary operator ni te ek observe kar
            className={({ isActive }) =>
              `${isActive ? "text-orange-600 " : "text-gray-800"} `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-600" : "text-gray-800"}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "text-gray-800"}`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/githubstatic"
            className={({ isActive }) =>
              `${isActive ? "text-orange-600" : "text-gray-600"}`
            }
          >
            My GitHub
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <Link
            to="#"
            className=" px-4 py-2 font-semibold bg-orange-600 rounded-lg"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="px-4 py-2 font-semibold bg-orange-600 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

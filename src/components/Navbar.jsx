import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-amber-100 text-amber-700"
          : "text-slate-700 hover:text-amber-700 hover:bg-amber-50"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center font-bold text-white text-lg shadow-temple-glow">
            ॐ
          </div>
          <div>
            <h1 className="font-semibold text-lg text-amber-700 leading-tight">
              Devasthanam
            </h1>
            <p className="text-xs text-slate-500">Temple Booking System</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/booking">Book Darshan</NavItem>
          <NavItem to="/donate">Donate</NavItem>
          <NavItem to="/admin">Admin</NavItem>
          <Link
            to="/login"
            className="ml-3 px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-amber-50 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-amber-100 shadow-lg animate-fadeIn">
          <div className="flex flex-col p-3 space-y-1">
            <NavItem to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavItem>
            <NavItem to="/booking" onClick={() => setIsOpen(false)}>
              Book Darshan
            </NavItem>
            <NavItem to="/donate" onClick={() => setIsOpen(false)}>
              Donate
            </NavItem>
            <NavItem to="/admin" onClick={() => setIsOpen(false)}>
              Admin
            </NavItem>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 text-center bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-lg font-semibold shadow hover:scale-105 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

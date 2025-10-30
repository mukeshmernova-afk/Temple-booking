import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const [lang, setLang] = useState("en");
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ta" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

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
          <NavItem to="/">{lang === "en" ? "Home" : "முகப்பு"}</NavItem>
          <NavItem to="/booking">{lang === "en" ? "Book Darshan" : "தரிசனம் பதிவு"}</NavItem>
          <NavItem to="/donate">{lang === "en" ? "Donate" : "நன்கொடை"}</NavItem>
          <NavItem to="/admin">{lang === "en" ? "Admin" : "நிர்வாகம்"}</NavItem>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="ml-3 flex items-center gap-1 px-3 py-2 text-sm border rounded-lg hover:bg-amber-50 transition-all duration-300"
          >
            <Languages size={18} className="text-amber-600" />
            {lang === "en" ? "தமிழ்" : "English"}
          </button>

          <Link
            to="/login"
            className="ml-3 px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {lang === "en" ? "Login" : "உள் நுழை"}
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
              {lang === "en" ? "Home" : "முகப்பு"}
            </NavItem>
            <NavItem to="/booking" onClick={() => setIsOpen(false)}>
              {lang === "en" ? "Book Darshan" : "தரிசனம் பதிவு"}
            </NavItem>
            <NavItem to="/donate" onClick={() => setIsOpen(false)}>
              {lang === "en" ? "Donate" : "நன்கொடை"}
            </NavItem>
            <NavItem to="/admin" onClick={() => setIsOpen(false)}>
              {lang === "en" ? "Admin" : "நிர்வாகம்"}
            </NavItem>

            {/* Mobile Language Button */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-amber-50"
            >
              <Languages size={18} className="text-amber-600" />
              {lang === "en" ? "தமிழ்" : "English"}
            </button>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 text-center bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-lg font-semibold shadow hover:scale-105 transition-all"
            >
              {lang === "en" ? "Login" : "உள் நுழை"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

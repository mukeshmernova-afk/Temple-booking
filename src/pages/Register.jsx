import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      alert(`${t("register.success")} ${form.name}!`);
      navigate("/login");
    } else {
      alert(t("register.invalid"));
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      {/* 🔆 Background Glows */}
      <div className="absolute w-72 h-72 bg-amber-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* 🪔 Registration Form */}
      <div
        data-aos="zoom-in"
        className="relative z-10 bg-white/80 backdrop-blur-md border border-amber-200 p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🛕</div>
          <h2 className="text-3xl font-extrabold text-amber-700">
            {t("register.title")}
          </h2>
          <p className="text-gray-600 text-sm mt-2">{t("register.subtitle")}</p>
        </div>

        {/* 📜 Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("register.name_label")}
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("register.name_placeholder")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("register.email_label")}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("register.email_placeholder")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {t("register.password_label")}
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={t("register.password_placeholder")}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-400 transition-all transform hover:scale-[1.02]"
          >
            {t("register.button")}
          </button>
        </form>

        {/* 🔗 Already have an account? */}
        <p className="text-sm text-center mt-6 text-gray-700">
          {t("register.have_account")}{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-amber-600 font-semibold cursor-pointer hover:underline"
          >
            {t("register.login_here")}
          </span>
        </p>
      </div>
    </div>
  );
}

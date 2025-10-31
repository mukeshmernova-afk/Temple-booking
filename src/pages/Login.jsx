import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      alert(`${t("login.welcome")}, ${form.email}!`);
      navigate("/");
    } else {
      alert(t("login.invalid"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-white px-4">
      <div
        data-aos="fade-up"
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-200"
      >
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-6">
          {t("login.title")}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {t("login.email_label")}
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("login.email_placeholder")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              {t("login.password_label")}
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={t("login.password_placeholder")}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            {t("login.button")}
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          {t("login.no_account")}{" "}
          <span
            className="text-amber-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            {t("login.register_here")}
          </span>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      alert(`Welcome, ${form.email}!`);
      navigate("/"); // Redirect to home after login
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-white px-4">
      <div
        data-aos="fade-up"
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-200"
      >
        <h2 className="text-2xl font-bold text-center text-amber-700 mb-6">
          Devasthanam Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-amber-400 focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <span className="text-amber-600 font-semibold cursor-pointer hover:underline">
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
}

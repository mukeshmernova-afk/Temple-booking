import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

// 🛕 Import local temple images
import meenakshi from "../assets/temples/meenakshi.jpg";
import brihadeeswarar from "../assets/temples/brihadeeswarar.jpg";
import kapaleeswarar from "../assets/temples/kapaleeswarar.jpg";
import ranganathaswamy from "../assets/temples/ranganathaswamy.jpg";
import palani from "../assets/temples/palani.jpg";
import annamalaiyar from "../assets/temples/annamalaiyar.jpg";
import mariamman from "../assets/temples/mariamman.jpg";
import subramaniya from "../assets/temples/subramaniya.jpg";
import kallalagar from "../assets/temples/kallalagar.jpg";
import ramanathaswamy from "../assets/temples/ramanathaswamy.jpg";
import temple1 from "../assets/temples/temple1.jpg";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🌐 Load temple data dynamically from translation files
  const temples = t("temples", { returnObjects: true });

  // 🖼️ Match temple images with IDs
  const templeImages = [
    meenakshi,
    brihadeeswarar,
    kapaleeswarar,
    ranganathaswamy,
    palani,
    annamalaiyar,
    mariamman,
    subramaniya,
    kallalagar,
    ramanathaswamy,
  ];
  temples.forEach((temple, index) => {
    temple.image = templeImages[index];
  });

  return (
    <div className="space-y-20 bg-gradient-to-b from-amber-50 via-white to-yellow-50 min-h-screen pb-20">
      {/* 🌅 Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-20 pt-10">
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700 leading-tight">
            {t("home.title")}
          </h1>
          <p className="mt-4 text-slate-700 text-lg leading-relaxed">
            {t("home.description")}
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              to="/booking"
              className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition shadow-md"
            >
              {t("home.book_button")}
            </Link>
            <Link
              to="/donate"
              className="px-6 py-3 border-2 border-amber-500 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition"
            >
              {t("home.donate_button")}
            </Link>
          </div>
        </div>

        {/* 🛕 Hero Floating Image */}
        <div data-aos="fade-left" className="relative">
          <img
            src={temple1}
            alt="Temple"
            className="w-full h-96 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500"
          />
          <div className="absolute -bottom-8 -right-6 bg-amber-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
            {t("home.portal_tag")}
          </div>
        </div>
      </section>

      {/* 🛕 Temples List Section */}
      <section className="px-6 md:px-20">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-10 text-amber-700 text-center">
          {t("home.temple_heading")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {temples.map((temple, index) => (
            <div
              key={temple.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
            >
              <div className="overflow-hidden relative">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-52 object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-3 left-4 text-white text-lg font-semibold drop-shadow-lg">
                  {temple.name}
                </h3>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">{temple.deity}</span> — {temple.location}
                </p>

                <p className="text-sm font-medium text-slate-600 mb-2">
                  Available Pooja Slots:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["06:00 AM - 08:00 AM", "10:00 AM - 12:00 PM", "04:00 PM - 06:00 PM"].map((slot, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium"
                    >
                      {slot}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/temple/${temple.id}`}
                  className="block w-full text-center bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
                >
                  {t("home.book_button")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

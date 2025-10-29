import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// 🛕 Sample temples data (you can later fetch from API or separate file)
const temples = [
  {
    id: 1,
    name: "Sri Meenakshi Amman Temple",
    deity: "Goddess Meenakshi",
    location: "Madurai, Tamil Nadu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Meenakshi_Amman_temple_tower.JPG",
    about:
      "The Meenakshi Amman Temple in Madurai is one of the oldest and most important temples in India, dedicated to Goddess Meenakshi and Lord Sundareswarar. It is renowned for its stunning Dravidian architecture and vibrant sculptures.",
  },
  {
    id: 2,
    name: "Arulmigu Brihadeeswarar Temple",
    deity: "Lord Shiva",
    location: "Thanjavur, Tamil Nadu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Thanjavur_Big_Temple_01.JPG",
    about:
      "The Brihadeeswarar Temple, also known as the Big Temple, is a UNESCO World Heritage Site built by Raja Raja Chola I in the 11th century. It showcases the architectural brilliance of the Chola dynasty.",
  },
  {
    id: 3,
    name: "Arulmigu Kapaleeswarar Temple",
    deity: "Lord Shiva",
    location: "Chennai, Tamil Nadu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Kapaleeshwarar_temple_tank.jpg",
    about:
      "Located in Mylapore, Chennai, the Kapaleeswarar Temple is dedicated to Lord Shiva and Goddess Karpagambal. It is an important cultural and religious landmark, known for its annual Panguni festival.",
  },
  // ➕ Add more temples if needed
];

export default function TempleDetails() {
  const { id } = useParams();
  const temple = temples.find((t) => t.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!temple) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-600">
          Temple not found
        </h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-amber-600"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* 🛕 Temple Image */}
      <div
        className="rounded-2xl overflow-hidden shadow-lg mb-8"
        data-aos="fade-up"
      >
        <img
          src={temple.image}
          alt={temple.name}
          className="w-full h-96 object-cover"
          onError={(e) => {
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/3/3e/Hindu_temple_generic_image.jpg";
          }}
        />
      </div>

      {/* 🛕 Temple Info */}
      <div data-aos="fade-up" className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-amber-700 mb-2">
          {temple.name}
        </h1>
        <p className="text-gray-600 mb-2 font-medium">
          <span className="text-gray-800">Deity:</span> {temple.deity}
        </p>
        <p className="text-gray-600 mb-4 font-medium">
          <span className="text-gray-800">Location:</span> {temple.location}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">{temple.about}</p>

        {/* 🕉️ Available Pooja Slots */}
        <h3 className="text-xl font-semibold mb-3 text-amber-700">
          Available Pooja Slots
        </h3>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm">
            06:00 AM - 08:00 AM
          </span>
          <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm">
            10:00 AM - 12:00 PM
          </span>
          <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm">
            04:00 PM - 06:00 PM
          </span>
        </div>

        {/* 🙏 Book Now Button */}
        <Link
          to="/booking"
          className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition duration-300"
        >
          Book Darshan
        </Link>
      </div>
    </div>
  );
}

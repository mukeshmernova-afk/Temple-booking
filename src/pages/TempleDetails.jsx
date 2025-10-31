import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next"; // ✅ For language translation

const temples = [
  {
    id: 1,
    name_en: "Sri Meenakshi Amman Temple",
    name_ta: "ஸ்ரீ மீனாட்சியம்மன் கோவில்",
    deity_en: "Goddess Meenakshi",
    deity_ta: "அம்மன் மீனாட்சி",
    location_en: "Madurai, Tamil Nadu",
    location_ta: "மதுரை, தமிழ்நாடு",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Meenakshi_Amman_temple_tower.JPG",
    about_en:
      "The Meenakshi Amman Temple in Madurai is one of the oldest and most important temples in India, dedicated to Goddess Meenakshi and Lord Sundareswarar. It is renowned for its stunning Dravidian architecture and vibrant sculptures.",
    about_ta:
      "மதுரையில் அமைந்துள்ள ஸ்ரீ மீனாட்சியம்மன் கோவில் இந்தியாவின் பழமையான மற்றும் முக்கியமான கோவில்களில் ஒன்றாகும். அம்மன் மீனாட்சி மற்றும் சுந்தரேஸ்வரர் இறைவனுக்காக அர்ப்பணிக்கப்பட்டது. இதன் திராவிடக் கலைப்பாணி மற்றும் வண்ணமயமான சிற்பங்கள் புகழ்பெற்றவை.",
  },
  {
    id: 2,
    name_en: "Arulmigu Brihadeeswarar Temple",
    name_ta: "அருள்மிகு பெரியக்கோவில் (பிரகதீஸ்வரர் கோவில்)",
    deity_en: "Lord Shiva",
    deity_ta: "இறைவன் சிவன்",
    location_en: "Thanjavur, Tamil Nadu",
    location_ta: "தஞ்சாவூர், தமிழ்நாடு",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Thanjavur_Big_Temple_01.JPG",
    about_en:
      "The Brihadeeswarar Temple, also known as the Big Temple, is a UNESCO World Heritage Site built by Raja Raja Chola I in the 11th century. It showcases the architectural brilliance of the Chola dynasty.",
    about_ta:
      "அருள்மிகு பிரகதீஸ்வரர் கோவில் அல்லது பெரியக்கோவில், 11ஆம் நூற்றாண்டில் இராஜராஜ சோழனால் கட்டப்பட்டது. இது யுனெஸ்கோ உலக பாரம்பரிய தளம் ஆகும் மற்றும் சோழ வம்சத்தின் கட்டிடக் கலை சிறப்பை வெளிப்படுத்துகிறது.",
  },
  {
    id: 3,
    name_en: "Arulmigu Kapaleeswarar Temple",
    name_ta: "அருள்மிகு கபாலீஸ்வரர் கோவில்",
    deity_en: "Lord Shiva",
    deity_ta: "இறைவன் சிவன்",
    location_en: "Chennai, Tamil Nadu",
    location_ta: "சென்னை, தமிழ்நாடு",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/Kapaleeshwarar_temple_tank.jpg",
    about_en:
      "Located in Mylapore, Chennai, the Kapaleeswarar Temple is dedicated to Lord Shiva and Goddess Karpagambal. It is an important cultural and religious landmark, known for its annual Panguni festival.",
    about_ta:
      "சென்னையின் மைலாப்பூரில் அமைந்துள்ள அருள்மிகு கபாலீஸ்வரர் கோவில், இறைவன் சிவனுக்கும் கர்பகாம்பாள் தாயாருக்கும் அர்ப்பணிக்கப்பட்டது. இது கலாச்சார மற்றும் மத அடையாளமாகும், வருடாந்திர பங்குனி திருவிழாவிற்குப் பிரசித்தமானது.",
  },
];

export default function TempleDetails() {
  const { id } = useParams();
  const { i18n, t } = useTranslation(); // ✅ i18next hook
  const lang = i18n.language; // Get current language (en or ta)
  const temple = temples.find((t) => t.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!temple) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-600">
          {lang === "ta" ? "கோவில் காணப்படவில்லை" : "Temple not found"}
        </h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-amber-500 text-white px-5 py-2 rounded-lg hover:bg-amber-600"
        >
          {lang === "ta" ? "முகப்புக்கு திரும்பவும்" : "Back to Home"}
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
          alt={lang === "ta" ? temple.name_ta : temple.name_en}
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
          {lang === "ta" ? temple.name_ta : temple.name_en}
        </h1>
        <p className="text-gray-600 mb-2 font-medium">
          <span className="text-gray-800">
            {lang === "ta" ? "இறைவர்:" : "Deity:"}
          </span>{" "}
          {lang === "ta" ? temple.deity_ta : temple.deity_en}
        </p>
        <p className="text-gray-600 mb-4 font-medium">
          <span className="text-gray-800">
            {lang === "ta" ? "இடம்:" : "Location:"}
          </span>{" "}
          {lang === "ta" ? temple.location_ta : temple.location_en}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {lang === "ta" ? temple.about_ta : temple.about_en}
        </p>

        {/* 🕉️ Available Pooja Slots */}
        <h3 className="text-xl font-semibold mb-3 text-amber-700">
          {lang === "ta" ? "கிடைக்கும் பூஜை நேரங்கள்" : "Available Pooja Slots"}
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
          {lang === "ta" ? "தரிசனம் முன்பதிவு செய்யவும்" : "Book Darshan"}
        </Link>
      </div>
    </div>
  );
}

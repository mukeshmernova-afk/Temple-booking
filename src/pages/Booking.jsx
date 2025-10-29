import React, { useState } from "react";
import { CalendarDays, Users, Clock } from "lucide-react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    slot: "06:00 AM",
    pooja: "Abhishekam",
    pilgrims: 1,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🙏 Booking Requested 🙏\n\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.slot}\nPooja: ${form.pooja}\nPilgrims: ${form.pilgrims}`
    );
  };

  const handleReset = () =>
    setForm({ name: "", date: "", slot: "06:00 AM", pooja: "Abhishekam", pilgrims: 1 });

  const poojas = [
    {
      name: "Abhishekam (அபிஷேகம்)",
      desc: "A sacred ritual where the deity is bathed with holy substances like milk, honey, and sandalwood paste.",
      tamil: "தெய்வத்திற்கான புனித குளியல் நிகழ்ச்சி. பால், தேன், சந்தனம் போன்றவற்றால் அபிஷேகம் செய்யப்படுகிறது.",
    },
    {
      name: "Archana (அர்ச்சனை)",
      desc: "Chanting the deity’s name and offering flowers to seek blessings.",
      tamil: "தெய்வத்தின் பெயரை ஜபித்து பூக்களை அர்ப்பணிக்கும் வழிபாடு.",
    },
    {
      name: "Deepa Aradhanai (தீப ஆராதனை)",
      desc: "Offering light to the deity symbolizing removal of darkness and ignorance.",
      tamil: "தெய்வத்திற்கு விளக்கை காண்பித்து, இருளையும் அறியாமையையும் நீக்கும் வழிபாடு.",
    },
    {
      name: "Special Darshan (சிறப்பு தரிசனம்)",
      desc: "Priority entry to have a close and peaceful view of the deity.",
      tamil: "தெய்வத்தை அருகில் இருந்து அமைதியாக தரிசிக்க சிறப்பு அனுமதி.",
    },
    {
      name: "Annadhanam (அன்னதானம்)",
      desc: "Offering food to devotees as a noble act of service.",
      tamil: "பக்தர்களுக்கு அன்னம் வழங்கும் புனித செயல்.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-700 mb-2">
            🛕 Temple Darshan & Pooja Booking
          </h1>
          <p className="text-slate-600">
            Book your sacred darshan and pooja slots online. Experience devotion
            with simplicity and transparency.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100"
          >
            <h2 className="text-xl font-semibold text-amber-700 mb-4">
              📅 Fill Your Booking Details
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name (முழுப் பெயர்)
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            {/* Date & Slot */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Select Date (தேதி)
                </label>
                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute right-3 top-3 text-slate-400"
                  />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Time Slot (நேரம்)
                </label>
                <div className="relative">
                  <Clock
                    size={18}
                    className="absolute right-3 top-3 text-slate-400"
                  />
                  <select
                    name="slot"
                    value={form.slot}
                    onChange={handleChange}
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  >
                    <option>06:00 AM</option>
                    <option>08:00 AM</option>
                    <option>10:00 AM</option>
                    <option>12:00 PM</option>
                    <option>04:00 PM</option>
                    <option>06:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pooja Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Select Pooja (பூஜை தேர்வு)
              </label>
              <select
                name="pooja"
                value={form.pooja}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              >
                {poojas.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Pilgrims Count */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Number of Pilgrims (பக்தர்கள் எண்ணிக்கை)
              </label>
              <div className="relative">
                <Users
                  size={18}
                  className="absolute right-3 top-3 text-slate-400"
                />
                <input
                  type="number"
                  min="1"
                  name="pilgrims"
                  value={form.pilgrims}
                  onChange={handleChange}
                  className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-semibold rounded-lg shadow hover:scale-105 transition-transform"
              >
                Request Booking
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 border border-amber-400 text-amber-700 rounded-lg hover:bg-amber-50 transition"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Pooja Descriptions */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
            <h2 className="text-xl font-semibold text-amber-700 mb-4">
              🙏 Available Poojas & Meanings
            </h2>
            <div className="space-y-5 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300">
              {poojas.map((p, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition"
                >
                  <h3 className="font-semibold text-amber-700">{p.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
                  <p className="text-sm text-amber-800 italic mt-1">
                    {p.tamil}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

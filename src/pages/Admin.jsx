import React, { useState } from "react";
import Card from "../components/Card";

export default function Admin() {
  const [language, setLanguage] = useState("en");

  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Mukeshkanna Murugan",
      temple: "Arulmigu Murugan Temple",
      date: "2025-11-10",
      time: "10:00 AM - 11:00 AM",
      pooja: "Abhishekam",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya",
      temple: "Sri Meenakshi Amman Temple",
      date: "2025-11-11",
      time: "6:00 AM - 7:00 AM",
      pooja: "Archana",
      status: "Approved",
    },
    {
      id: 3,
      name: "Stalin",
      temple: "Perumal Temple",
      date: "2025-11-12",
      time: "9:00 AM - 10:00 AM",
      pooja: "Homam",
      status: "Rejected",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">
          {language === "en"
            ? "🛕 Devasthanam Admin Dashboard"
            : "🛕 தேவஸ்தானம் நிர்வாக குழு"}
        </h1>

        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === "en" ? "ta" : "en")}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          {language === "en" ? "தமிழ்" : "English"}
        </button>
      </div>

      <p className="text-gray-700 max-w-3xl">
        {language === "en"
          ? "Manage temple bookings, approve pooja requests, assign priests, and oversee temple activities from a single dashboard. This page is designed for authorized temple administrators to maintain smooth temple operations."
          : "கோவில் முன்பதிவுகளை நிர்வகிக்கவும், பூஜை கோரிக்கைகளை ஒப்புதல் அளிக்கவும், பூசாரிகளை நியமிக்கவும், மற்றும் கோவில் நடவடிக்கைகளை ஒரே தளத்தில் கண்காணிக்கவும் இது வடிவமைக்கப்பட்டுள்ளது."}
      </p>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-orange-700">
              {language === "en" ? "Total Bookings" : "மொத்த முன்பதிவுகள்"}
            </h2>
            <p className="text-4xl font-bold text-gray-800">{bookings.length}</p>
          </div>
        </Card>

        <Card>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-700">
              {language === "en" ? "Pending Requests" : "நிலுவையில் உள்ள கோரிக்கைகள்"}
            </h2>
            <p className="text-4xl font-bold text-gray-800">
              {bookings.filter((b) => b.status === "Pending").length}
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-green-700">
              {language === "en" ? "Approved Slots" : "ஒப்புதல் பெற்றவை"}
            </h2>
            <p className="text-4xl font-bold text-gray-800">
              {bookings.filter((b) => b.status === "Approved").length}
            </p>
          </div>
        </Card>
      </div>

      {/* Booking Requests Table */}
      <Card
        title={
          language === "en"
            ? "Booking Requests Management"
            : "முன்பதிவு கோரிக்கைகள் மேலாண்மை"
        }
      >
        <p className="text-sm mb-4 text-gray-600">
          {language === "en"
            ? "Below are recent pooja booking requests from devotees. You can approve or reject based on slot availability or temple schedule."
            : "பக்தர்களிடமிருந்து வந்த சமீபத்திய பூஜை முன்பதிவு கோரிக்கைகள் கீழே உள்ளன. கோவில் அட்டவணை மற்றும் நேரம் கிடைப்பதன் அடிப்படையில் நீங்கள் ஒப்புதல் அளிக்கலாம் அல்லது நிராகரிக்கலாம்."}
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg bg-white">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3 text-left">
                  {language === "en" ? "Devotee Name" : "பக்தரின் பெயர்"}
                </th>
                <th className="py-2 px-3 text-left">
                  {language === "en" ? "Temple" : "கோவில்"}
                </th>
                <th className="py-2 px-3 text-center">
                  {language === "en" ? "Date" : "தேதி"}
                </th>
                <th className="py-2 px-3 text-center">
                  {language === "en" ? "Time" : "நேரம்"}
                </th>
                <th className="py-2 px-3 text-center">
                  {language === "en" ? "Pooja" : "பூஜை"}
                </th>
                <th className="py-2 px-3 text-center">
                  {language === "en" ? "Status" : "நிலை"}
                </th>
                <th className="py-2 px-3 text-center">
                  {language === "en" ? "Action" : "செயல்"}
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-orange-50 transition text-sm"
                >
                  <td className="py-2 px-3 text-center">{booking.id}</td>
                  <td className="py-2 px-3">{booking.name}</td>
                  <td className="py-2 px-3">{booking.temple}</td>
                  <td className="py-2 px-3 text-center">{booking.date}</td>
                  <td className="py-2 px-3 text-center">{booking.time}</td>
                  <td className="py-2 px-3 text-center">{booking.pooja}</td>

                  {/* Status */}
                  <td
                    className={`py-2 px-3 font-semibold text-center ${
                      booking.status === "Approved"
                        ? "text-green-600"
                        : booking.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {language === "en"
                      ? booking.status
                      : booking.status === "Approved"
                      ? "ஒப்புதல்"
                      : booking.status === "Rejected"
                      ? "நிராகரிக்கப்பட்டது"
                      : "நிலுவையில்"}
                  </td>

                  {/* Action Buttons */}
                  <td className="py-2 px-3 text-center space-x-2">
                    <button
                      onClick={() => handleStatusChange(booking.id, "Approved")}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
                    >
                      {language === "en" ? "Approve" : "ஒப்புதல்"}
                    </button>
                    <button
                      onClick={() => handleStatusChange(booking.id, "Rejected")}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                    >
                      {language === "en" ? "Reject" : "நிராகரிக்கவும்"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Footer */}
      <div className="text-center text-gray-600 mt-10 text-sm">
        {language === "en"
          ? "© 2025 Tamil Nadu Hindu Religious & Charitable Endowments Department | Managed by Devasthanam Admin"
          : "© 2025 தமிழ் நாடு இந்து சமய மற்றும் தொண்டு துறை | தேவஸ்தான நிர்வாகம் மூலம் பராமரிக்கப்படுகிறது"}
      </div>
    </div>
  );
}

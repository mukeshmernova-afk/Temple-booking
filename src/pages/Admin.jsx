import React, { useState } from "react";
import Card from "../components/Card";

export default function Admin() {
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
      name: "Priya ",
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
      <h1 className="text-4xl font-bold text-orange-800 text-center mb-4">
        🛕 Devasthanam Admin Dashboard
      </h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto">
        Manage temple bookings, approve pooja requests, assign priests, and oversee temple
        activities from a single dashboard. This page is designed for authorized temple
        administrators to maintain smooth temple operations.
      </p>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-orange-700">Total Bookings</h2>
            <p className="text-4xl font-bold text-gray-800">{bookings.length}</p>
          </div>
        </Card>
        <Card>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-yellow-700">Pending Requests</h2>
            <p className="text-4xl font-bold text-gray-800">
              {bookings.filter((b) => b.status === "Pending").length}
            </p>
          </div>
        </Card>
        <Card>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-green-700">Approved Slots</h2>
            <p className="text-4xl font-bold text-gray-800">
              {bookings.filter((b) => b.status === "Approved").length}
            </p>
          </div>
        </Card>
      </div>

      {/* Booking Requests Table */}
      <Card title="Booking Requests Management">
        <p className="text-sm mb-4 text-gray-600">
          Below are recent pooja booking requests from devotees. You can approve or reject
          based on slot availability or temple schedule.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg bg-white">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3 text-left">Devotee Name</th>
                <th className="py-2 px-3 text-left">Temple</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3">Time</th>
                <th className="py-2 px-3">Pooja</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3 text-center">Action</th>
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
                  <td
                    className={`py-2 px-3 font-semibold text-center ${
                      booking.status === "Approved"
                        ? "text-green-600"
                        : booking.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="py-2 px-3 text-center space-x-2">
                    <button
                      onClick={() => handleStatusChange(booking.id, "Approved")}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleStatusChange(booking.id, "Rejected")}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Reject
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
        © 2025 Tamil Nadu Hindu Religious & Charitable Endowments Department | Managed by
        Devasthanam Admin
      </div>
    </div>
  );
}

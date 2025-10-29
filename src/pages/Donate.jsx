import React, { useState } from "react";
import Card from "../components/Card";
import { FaHandHoldingHeart, FaLock } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";

const Donate = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleDonate = (donationType) => {
    setSuccessMessage(`🙏 Thank you for your generous donation to ${donationType}!`);
    setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
  };

  const donations = [
    {
      icon: <FaHandHoldingHeart className="text-4xl text-pink-600" />,
      title: "General Donation",
      description:
        "Your contribution helps the temple with daily poojas, maintenance, and welfare programs that benefit the devotees and the community.",
    },
    {
      icon: <MdOutlineAccountBalance className="text-4xl text-green-600" />,
      title: "Temple Renovation",
      description:
        "Help preserve our heritage. Your donation supports temple renovation, sacred art restoration, and infrastructure improvements.",
    },
    {
      icon: <FaLock className="text-4xl text-blue-600" />,
      title: "Special Fund",
      description:
        "Support specific temple events such as festivals, Annadhanam (free meals), and educational services for underprivileged devotees.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-6">
        🛕 Temple Donations
      </h1>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Your kind donations help us continue our spiritual, cultural, and social initiatives. 
        Every rupee you donate goes toward making a difference in preserving our traditions 
        and supporting temple activities.
      </p>

      {successMessage && (
        <div className="text-center mb-6">
          <p className="bg-green-100 text-green-700 px-6 py-3 rounded-xl inline-block font-medium shadow-md transition-all duration-300">
            {successMessage}
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {donations.map((donation, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl transition duration-300 bg-white/80 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-center space-y-4 p-4">
              {donation.icon}
              <h2 className="text-2xl font-semibold text-gray-800">{donation.title}</h2>
              <p className="text-gray-600 leading-relaxed">{donation.description}</p>
              <button
                onClick={() => handleDonate(donation.title)}
                className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition font-medium"
              >
                Donate Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Donate;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import { FaHandHoldingHeart, FaLock } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import { motion } from "framer-motion";


const Donate = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { t } = useTranslation();

  const handleDonate = (donationType) => {
    setSuccessMessage(`${t("donate.thank_you")} (${donationType})`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const donations = [
    {
      icon: <FaHandHoldingHeart className="text-5xl text-pink-600 drop-shadow-md" />,
      title: t("donate.general_title"),
      description: t("donate.general_desc"),
    },
    {
      icon: <MdOutlineAccountBalance className="text-5xl text-green-600 drop-shadow-md" />,
      title: t("donate.renovation_title"),
      description: t("donate.renovation_desc"),
    },
    {
      icon: <FaLock className="text-5xl text-blue-600 drop-shadow-md" />,
      title: t("donate.special_title"),
      description: t("donate.special_desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-50 py-16 px-6 overflow-hidden">
      <motion.h1
        className="text-4xl font-bold text-center text-orange-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🛕 {t("donate.heading")}
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t("donate.intro")}
      </motion.p>

      {successMessage && (
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="bg-green-100 text-green-700 px-6 py-3 rounded-xl inline-block font-medium shadow-md">
            {successMessage}
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {donations.map((donation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
              <div className="flex flex-col items-center text-center space-y-4">
                {donation.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {donation.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {donation.description}
                </p>
                <button
                  onClick={() => handleDonate(donation.title)}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:scale-105 shadow-md transition-transform"
                >
                  {t("donate.button")}
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Donate;

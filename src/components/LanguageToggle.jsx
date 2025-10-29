import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ta" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-amber-600 text-white px-4 py-2 rounded fixed top-4 right-4 shadow"
    >
      {i18n.language === "en" ? "தமிழ்" : "English"}
    </button>
  );
};

export default LanguageToggle;

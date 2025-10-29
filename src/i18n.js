import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Devasthanam",
      bookDarshan: "Book Darshan",
      temples: "Temples",
      contact: "Contact",
      footerText: "© 2025 Devasthanam Temple Booking System. All rights reserved.",
    },
  },
  ta: {
    translation: {
      title: "தேவஸ்தானம்",
      bookDarshan: "தரிசன முன்பதிவு",
      temples: "கோவில்கள்",
      contact: "தொடர்பு",
      footerText: "© 2025 தேவஸ்தானம் கோவில் முன்பதிவு அமைப்பு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

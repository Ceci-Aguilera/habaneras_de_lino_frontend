import axios from "axios";
import { createContext } from "react";
import router from "next/router";
import { useEffect, useState, useContext } from "react";

const domain = process.env.NEXT_PUBLIC_API_DOMAIN_NAME;

const LanguageContext = createContext();

const getCurrentLanguage = async () => {
  try {
    const lan = await window.localStorage.getItem("lan");
    if (lan === null || lan == undefined) {
      return "en";
    } else return lan;
  } catch {
    return lan;
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(async () => {
    const lan = await getCurrentLanguage();
    setLanguage(lan);
  }, []);

  const setNewLanguage = () => {
    if (language == "en") {
      window.localStorage.setItem("lan", "es");
      setLanguage("es");
    } else {
      window.localStorage.setItem("lan", "en");
      setLanguage("en");
    }
  };

  const setCustomLanguage = (lan) => {
    window.localStorage.setItem("lan", lan);
    setLanguage(lan);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setNewLanguage, setCustomLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export const LanguageConsumer = LanguageContext.Consumer;

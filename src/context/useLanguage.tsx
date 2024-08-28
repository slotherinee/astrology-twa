import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { useUserData } from "../hooks/useUserData";

type LanguageContextType = {
  language: "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const userInfo = useUserData();
  const [language, setLanguage] = useState<"ru" | "en">("en");

  useEffect(() => {
    if (userInfo?.language_code) {
      setLanguage(userInfo.language_code === "ru" ? "ru" : "en");
    }
  }, [userInfo]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

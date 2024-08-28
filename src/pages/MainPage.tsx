import { useState, useCallback } from "react";
import signsTranslations from "../helper/signsTranslations";
import { useNavigate } from "react-router-dom";
import HoroscopeItem from "../components/HoroscopeItem";
import CustomButton from "../components/CustomButton";
import { useLanguage } from "../context/useLanguage";
import { motion } from "framer-motion";

export default function MainPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  const handleSignClick = useCallback(
    (sign: string) => {
      if (selectedSign === sign) {
        setSelectedSign(null);
        return;
      }
      setSelectedSign(sign);
    },
    [selectedSign]
  );

  const handleButtonClick = useCallback(() => {
    if (!selectedSign) {
      return;
    }
    navigate("/" + selectedSign);
  }, [selectedSign, navigate]);

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-bold">
          {language === "ru"
            ? "Узнай свой гороскоп на ближайшее будущее!"
            : "Find out your horoscope for the near future!"}
        </h1>
        <h4 className="text-center font-medium text-gray-400">
          {language === "ru"
            ? "Выберите свой знак зодиака и чтобы продолжить"
            : "Choose your zodiac sign to continue"}
        </h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 relative">
        {Object.keys(signsTranslations).map((signKey) => {
          const sign = signsTranslations[signKey];
          return (
            <motion.div
              key={signKey}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <HoroscopeItem
                sign={signKey}
                name={sign[language]}
                dates={sign.dates[language]}
                icon={sign.icon}
                selectedSign={selectedSign}
                handleSignClick={handleSignClick}
              />
            </motion.div>
          );
        })}
      </div>
      <CustomButton
        onClick={handleButtonClick}
        disabled={selectedSign === null}
        additionalClasses={
          !selectedSign ? "opacity-50 pointer-events-none" : ""
        }
      >
        {language === "ru" ? "Узнать гороскоп" : "Get horoscope"}
      </CustomButton>
    </>
  );
}

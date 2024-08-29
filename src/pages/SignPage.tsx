import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useMutation } from "@tanstack/react-query";
import { postData } from "../helper/getData";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useLanguage } from "../context/useLanguage";
import ZodiacSign from "../components/ZodiacSign";
import { TextEffect } from "../components/ui/TextEffect";
import { useSwipeable } from "react-swipeable";
import signsTranslations from "../helper/signsTranslations";
import WebApp from "@twa-dev/sdk";

export default function SignPage() {
  const { sign } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [period, setPeriod] = useState<"today" | "tomorrow">("today");

  useEffect(() => {
    WebApp.BackButton.onClick(() => navigate("/"));
  }, [navigate]);

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      console.log("Horoscope data:", data);
    },
    onError: (error) => {
      console.error("Error fetching horoscope:", error);
    },
  });

  useEffect(() => {
    mutation.mutate({
      sign,
      period,
      language: language === "ru" ? "original" : "translated",
    });
  }, [sign, language, period]);

  const handlePeriod = (period: "today" | "tomorrow") => {
    setPeriod(period === "today" ? "tomorrow" : "today");
  };

  const handlers = useSwipeable({
    onSwipedRight: () => navigate(-1),
    trackMouse: false,
    trackTouch: true,
  });

  const getPeriodText = (period: "today" | "tomorrow") => {
    if (language === "ru") {
      return period === "today" ? "сегодня" : "завтра";
    }
    return period;
  };

  return (
    <div {...handlers} className="flex flex-col gap-y-2 py-2 min-h-screen">
      <div className="flex flex-col justify-center items-center text-center gap-y-8">
        {mutation.isError ? (
          <div className="text-red-500">
            {language === "ru"
              ? "Ошибка при получении данных"
              : "Error fetching horoscope data"}
          </div>
        ) : mutation.isPending ? (
          <Spinner />
        ) : mutation.data ? (
          <>
            <div className="bg-slate-800 w-1/4 rounded-full p-6 flex items-center justify-center">
              <img src={`icons/${mutation.data.sign}.png`} alt="sign" />
            </div>
            <div className="space-y-4 px-2 text-center">
              <h2 className="text-2xl font-bold text-gray-300">
                <ZodiacSign sign={sign as keyof typeof signsTranslations} />{" "}
                {language === "ru" ? "на" : "for"}{" "}
                <span
                  className="underline underline-offset-8 cursor-pointer"
                  onClick={() => handlePeriod(period)}
                >
                  {getPeriodText(period)}
                </span>
              </h2>
              <p className="text-gray-400 text-sm text-left">
                <TextEffect per="char" preset="fade">
                  {mutation.data.horoscope}
                </TextEffect>
              </p>
            </div>
            <CustomButton onClick={() => navigate("/")}>
              {language === "ru" ? "На главную" : "Go back to main"}
            </CustomButton>
          </>
        ) : null}
      </div>
    </div>
  );
}

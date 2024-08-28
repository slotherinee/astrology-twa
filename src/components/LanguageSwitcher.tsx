import { useLanguage } from "../context/useLanguage";
import RuFlag from "./ui/flags/RuFlag";
import UsFlag from "./ui/flags/UsFlag";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-end gap-x-4">
      {language === "ru" ? (
        <button
          className="flex gap-x-2 items-center justify-center text-gray-400 hover:text-white"
          onClick={() => setLanguage("en")}
        >
          Switch to English <UsFlag />
        </button>
      ) : (
        <button
          className="flex gap-x-2 items-center justify-center text-gray-400 hover:text-white"
          onClick={() => setLanguage("ru")}
        >
          Перевести на русский <RuFlag />
        </button>
      )}
    </div>
  );
}

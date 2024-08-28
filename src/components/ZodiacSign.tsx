import { useLanguage } from "../context/useLanguage";
import signsTranslations from "../helper/signsTranslations";

const ZodiacSign = ({ sign }: { sign: keyof typeof signsTranslations }) => {
  const { language } = useLanguage();
  const signName = signsTranslations[sign][language];

  return <span className="text-white">{signName}</span>;
};

export default ZodiacSign;

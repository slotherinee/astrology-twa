export type ZodiacSign = {
  en: string;
  ru: string;
  dates: {
    en: string;
    ru: string;
  };
  icon: string;
};

export type SignsTranslations = {
  [key: string]: ZodiacSign;
};

export type HoroscopeItem = {
  sign: string;
  name: string;
  dates: string;
  icon: string;
  selectedSign: string | null;
  handleSignClick: (sign: string) => void;
};

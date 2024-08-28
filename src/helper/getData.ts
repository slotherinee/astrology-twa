import axios from "axios";

export type HoroscopeData = {
  language: string;
  period: string;
  sign?: string;
};

// language: "translated",
//   period: "tomorrow",
//   sign: "taurus",

export const postData = async (state: HoroscopeData) => {
  try {
    const response = await axios.post(
      "https://poker247tech.ru/get_horoscope/",
      state
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

import type { HoroscopeItem } from "../types/types";
import ZodiacSign from "./ZodiacSign";

export default function HoroscopeItem({
  sign,
  name,
  dates,
  icon,
  selectedSign,
  handleSignClick,
}: HoroscopeItem) {
  return (
    <div
      className={`border text-gray-300 rounded-md p-2 flex justify-between items-center text-sm font-semibold cursor-pointer transition-transform ${
        selectedSign === sign ? "scale-95 bg-blue-600 border-none" : ""
      }`}
      onClick={() => handleSignClick(sign)}
    >
      <div className="flex flex-col gap-y-2">
        <ZodiacSign sign={sign} />
        <span className="text-gray-300 text-xs">{dates}</span>
      </div>
      <img className="h-6 w-6" src={icon} alt={name} />
    </div>
  );
}

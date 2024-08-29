import { Outlet } from "react-router-dom";
import { Meteors } from "./components/ui/Meteors";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  return (
    <main className="container mx-auto px-4 py-2 text-white w-full relative max-w-full overflow-hidden">
      <div className="flex flex-col gap-y-8">
        <LanguageSwitcher />
        <div>
          <Outlet />
        </div>
      </div>
      <Meteors number={20} />
    </main>
  );
}

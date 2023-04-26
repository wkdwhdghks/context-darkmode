import { useDarkMode } from "./context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import "./Home.css";

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="bg">
      <h1 className="text">Hello World!</h1>
      <button className="button" onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
    </div>
  );
}

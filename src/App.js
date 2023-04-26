import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./Home";

function App() {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
}

export default App;

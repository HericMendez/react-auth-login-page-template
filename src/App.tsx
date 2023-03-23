import "./App.css";
import PageRoutes from "./routes";
import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/Theme/ThemeContext";
function App() {
  const { theme } = useTheme();
  return (

    <div className={"App"}  style={{
      ...theme
    } as React.CSSProperties}>
      <Navbar />
      <PageRoutes />
    </div>
  );
}

export default App;

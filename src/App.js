import { BrowserRouter as Router } from "react-router-dom";
import { BtnToggleTheme } from "./components/BtnToggleTheme";
import { Navbar } from "./components/Navbar";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <BtnToggleTheme />
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </>
  );
}

export default App;

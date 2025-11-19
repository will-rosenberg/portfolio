import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AccentApp from "./pages/AccentApp";
import Plausible from "./pages/Plausible";
import Resume from "./pages/Resume";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accentapp" element={<AccentApp />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/plausible" element={<Plausible />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

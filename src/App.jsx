import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AccentApp from "./pages/AccentApp";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accentapp" element={<AccentApp />} />
      </Routes>
    </>
  );
}

export default App;

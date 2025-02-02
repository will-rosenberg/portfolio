import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/accentapp">Accent App</Link>
    </div>
  );
}

export default NavBar;

import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {" | "}
      <a href="https://app.williamrosenberg.com">Accent App</a>
    </div>
  );
}

export default NavBar;

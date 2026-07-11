import { FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>FinTrack</h2>

      <div className="nav-right">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
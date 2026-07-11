import { Link, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaWallet,
  FaChartLine,
  FaFileAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove logged in user
    localStorage.removeItem("loggedInUser");

    // Redirect to Login page
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>FinTrack</h2>
      </div>

      <ul className="menu">

        <Link to="/dashboard" className="menu-link">
          <li className="active">
            <FaHome />
            <span>Dashboard</span>
          </li>
        </Link>

        <Link to="/transactions" className="menu-link">
          <li>
            <FaWallet />
            <span>Transactions</span>
          </li>
        </Link>

        <Link to="/analytics" className="menu-link">
          <li>
            <FaChartLine />
            <span>Analytics</span>
          </li>
        </Link>

        <Link to="/reports" className="menu-link">
          <li>
            <FaFileAlt />
            <span>Reports</span>
          </li>
        </Link>

        <Link to="/profile" className="menu-link">
          <li>
            <FaUser />
            <span>Profile</span>
          </li>
        </Link>

        <Link to="/settings" className="menu-link">
          <li>
            <FaCog />
            <span>Settings</span>
          </li>
        </Link>

      </ul>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
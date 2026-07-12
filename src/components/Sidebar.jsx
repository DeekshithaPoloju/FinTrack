import {
  FaHome,
  FaWallet,
  FaChartLine,
  FaFileAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>FinTrack</h2>
      </div>

      <ul className="menu">

        <li>
          <NavLink to="/dashboard">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/transactions">
            <FaWallet />
            <span>Transactions</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/analytics">
            <FaChartLine />
            <span>Analytics</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports">
            <FaFileAlt />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;
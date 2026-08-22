import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const loadProfile = () => {
      const profile =
        JSON.parse(localStorage.getItem("profile")) || {};

      setProfileImage(profile.image || "");
    };

    // Load profile on first render
    loadProfile();

    // Reload profile when window gains focus
    window.addEventListener("focus", loadProfile);

    return () => {
      window.removeEventListener("focus", loadProfile);
    };
  }, []);

  return (
    <nav className="navbar">

      <h2>FinTrack</h2>

      <div className="nav-right">



        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="navbar-avatar"
            onClick={() => navigate("/profile")}
            title="Profile"
          />
        ) : (
          <div
            className="navbar-avatar default"
            onClick={() => navigate("/profile")}
            title="Profile"
          >
            U
          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    income: "",
    image: "",
  });

  useEffect(() => {
    const savedProfile =
      JSON.parse(localStorage.getItem("profile")) || {};

    setProfile({
      name: savedProfile.name || "",
      email: savedProfile.email || "",
      phone: savedProfile.phone || "",
      occupation: savedProfile.occupation || "",
      income: savedProfile.income || "",
      image: savedProfile.image || "",
    });
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfile((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert("Profile Updated Successfully");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="profile-page">

          <div className="profile-card">

            <h1>Profile</h1>

            <div className="profile-image">

              {profile.image ? (
                <img
                  src={profile.image}
                  alt="Profile"
                />
              ) : (
                <div className="avatar">
                  User
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

            </div>

            <div className="profile-form">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={profile.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={profile.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={profile.occupation}
                onChange={handleChange}
              />

              <input
                type="number"
                name="income"
                placeholder="Monthly Income"
                value={profile.income}
                onChange={handleChange}
              />

              <button onClick={handleSave}>
                Save Changes
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
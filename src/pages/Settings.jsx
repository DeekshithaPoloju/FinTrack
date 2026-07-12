                   import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Settings.css";

function Settings() {
  const [currency, setCurrency] = useState("INR");
  const [notifications, setNotifications] = useState(true);
  const [goal, setGoal] = useState(80000);

  useEffect(() => {
    const settings =
      JSON.parse(localStorage.getItem("settings")) || {};

    setCurrency(settings.currency || "INR");
    setNotifications(settings.notifications ?? true);
    setGoal(settings.goal || 80000);
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        currency,
        notifications,
        goal,
      })
    );

    alert("Settings Saved Successfully");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="settings-page">

          <div className="settings-card">

            <h1>Settings</h1>

            <div className="setting-item">

              <label>Currency</label>

              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value)
                }
              >
                <option value="INR">Indian Rupee (₹)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>

            </div>

            <div className="setting-item">

              <label>Monthly Savings Goal</label>

              <input
                type="number"
                value={goal}
                onChange={(e) =>
                  setGoal(Number(e.target.value))
                }
                placeholder="Enter Goal Amount"
              />

            </div>

            <div className="setting-item">

              <label>Notifications</label>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() =>
                  setNotifications(!notifications)
                }
              />

            </div>

            <button onClick={saveSettings}>
              Save Settings
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;
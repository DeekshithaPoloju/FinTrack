import { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import RecentActivity from "../components/RecentActivity";
import FinancialGoal from "../components/FinancialGoal";

function Dashboard() {
  const [userName, setUserName] = useState("User");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const profile =
      JSON.parse(localStorage.getItem("profile")) || {};

    if (profile.name && profile.name.trim() !== "") {
      setUserName(profile.name);
    }

    const today = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    setCurrentDate(today.toLocaleDateString("en-IN", options));
  }, []);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="content">

          <div className="welcome">

            <h1>
              Welcome Back, {userName}
            </h1>

            <h4>{currentDate}</h4>

            <p>
              Manage your finances with FinTrack.
            </p>

          </div>

          <SummaryCards />
          <RecentActivity />
          <FinancialGoal />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="content">

          <div className="welcome">
            <h1>Welcome Back </h1>
            <p>Manage your finances with FinTrack.</p>
          </div>

          <SummaryCards />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
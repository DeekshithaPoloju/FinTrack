import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  return (
    <div>

      <Navbar />

      <Sidebar />

      <SummaryCards />

      <Charts />

      <TransactionList />

    </div>
  );
}

export default Dashboard;
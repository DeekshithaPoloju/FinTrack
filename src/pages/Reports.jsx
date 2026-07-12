import "../styles/Reports.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Reports.css";

function Reports() {
  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  let income = 0;
  let expense = 0;

  const categoryTotals = {};

  transactions.forEach((item) => {

    if (item.type === "Income") {
      income += Number(item.amount);
    } else {
      expense += Number(item.amount);

      if (categoryTotals[item.category]) {
        categoryTotals[item.category] += Number(item.amount);
      } else {
        categoryTotals[item.category] = Number(item.amount);
      }
    }

  });

  const savings = income - expense;

  const recentTransactions = [...transactions]
    .reverse()
    .slice(0, 5);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="reports-page">

          <div className="reports-header">

            <div>

              <h1>Reports</h1>

              <p>
                Financial summary and transaction overview.
              </p>

            </div>

            <button
              className="print-btn"
              onClick={() => window.print()}
            >
              Print Report
            </button>

          </div>

          <div className="report-cards">

            <div className="report-card income">
              <h3>Total Income</h3>
              <h2>₹{income.toLocaleString()}</h2>
            </div>

            <div className="report-card expense">
              <h3>Total Expense</h3>
              <h2>₹{expense.toLocaleString()}</h2>
            </div>

            <div className="report-card savings">
              <h3>Savings</h3>
              <h2>₹{savings.toLocaleString()}</h2>
            </div>

          </div>

          <div className="reports-grid">

            <div className="report-section">

              <h2>Expense Summary</h2>

              {Object.keys(categoryTotals).length === 0 ? (

                <p>No expense records found.</p>

              ) : (

                Object.keys(categoryTotals).map((category) => (

                  <div
                    className="category-row"
                    key={category}
                  >

                    <span>{category}</span>

                    <strong>
                      ₹{categoryTotals[
                        category
                      ].toLocaleString()}
                    </strong>

                  </div>

                ))

              )}

            </div>

            <div className="report-section">

              <h2>Recent Transactions</h2>
              {recentTransactions.length === 0 ? (

                <p>No transactions available.</p>

              ) : (

                <table className="report-table">

                  <thead>

                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Category</th>
                      <th>Amount</th>
                    </tr>

                  </thead>

                  <tbody>

                    {recentTransactions.map((item) => (

                      <tr key={item.id}>

                        <td>{item.date}</td>

                        <td
                          style={{
                            color:
                              item.type === "Income"
                                ? "#22C55E"
                                : "#EF4444",
                            fontWeight: "600",
                          }}
                        >
                          {item.type}
                        </td>

                        <td>{item.category}</td>

                        <td>
                          ₹{Number(item.amount).toLocaleString()}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;
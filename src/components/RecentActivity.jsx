import { useEffect, useState } from "react";
import "./RecentActivity.css";

function RecentActivity() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("transactions")) || [];

    const latest = [...data].reverse().slice(0, 5);

    setTransactions(latest);
  }, []);

  return (
    <div className="recent-card">

      <h2>Recent Activity</h2>

      {transactions.length === 0 ? (

        <p className="empty">
          No recent transactions.
        </p>

      ) : (

        <table>

          <thead>

            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>

          </thead>

          <tbody>

            {transactions.map((item) => (

              <tr key={item.id}>

                <td>{item.date}</td>

                <td>{item.type}</td>

                <td>{item.category}</td>

                <td
                  style={{
                    color:
                      item.type === "Income"
                        ? "#22c55e"
                        : "#ef4444",
                    fontWeight: "600",
                  }}
                >
                  ₹{item.amount}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default RecentActivity;
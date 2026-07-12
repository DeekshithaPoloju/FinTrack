import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Analytics.css";

function Analytics() {

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

  const balance = income - expense;
  const savings = balance;

  const barData = [
    {
      name: "Income",
      Amount: income,
    },
    {
      name: "Expense",
      Amount: expense,
    },
  ];

  const pieData = Object.keys(categoryTotals).map((key) => ({
    name: key,
    value: categoryTotals[key],
  }));

  const lineData = [
    {
      month: "Jan",
      income: income * 0.15,
      expense: expense * 0.10,
    },
    {
      month: "Feb",
      income: income * 0.25,
      expense: expense * 0.18,
    },
    {
      month: "Mar",
      income: income * 0.35,
      expense: expense * 0.28,
    },
    {
      month: "Apr",
      income: income * 0.50,
      expense: expense * 0.40,
    },
    {
      month: "May",
      income: income * 0.65,
      expense: expense * 0.55,
    },
    {
      month: "Jun",
      income,
      expense,
    },
  ];

  const colors = [
    "#7C3AED",
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#EC4899",
    "#06B6D4",
    "#8B5CF6",
    "#22C55E",
    "#EAB308",
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="analytics-page">

          <div className="analytics-header">

            <div>

              <h1>Analytics Dashboard</h1>

              <p>
                Monitor your financial performance with
                interactive insights.
              </p>

            </div>

            <button className="filter-btn">
              This Month
            </button>

          </div>

          <div className="analytics-cards">

            <div className="analytics-card income">

              <h4>Total Income</h4>

              <h2>
                ₹{income.toLocaleString()}
              </h2>

              <span>All Income</span>

            </div>

            <div className="analytics-card expense">

              <h4>Total Expense</h4>

              <h2>
                ₹{expense.toLocaleString()}
              </h2>

              <span>All Expenses</span>

            </div>

            <div className="analytics-card savings">

              <h4>Savings</h4>

              <h2>
                ₹{savings.toLocaleString()}
              </h2>

              <span>Income - Expense</span>

            </div>

            <div className="analytics-card balance">

              <h4>Balance</h4>

              <h2>
                ₹{balance.toLocaleString()}
              </h2>

              <span>Available Balance</span>

            </div>

          </div>

          <div className="charts-grid">

            <div className="chart-card large">

              <h2>Income vs Expense</h2>

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <BarChart data={barData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Legend />

                  <Bar
                    dataKey="Amount"
                    fill="#7C3AED"
                    radius={[12, 12, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="chart-card">
              <h2>Expense Categories</h2>

              <ResponsiveContainer width="100%" height={350}>

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                  >

                    {pieData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={colors[index % colors.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

<div className="chart-card full-width">

  <h2>Top Spending Categories</h2>

  {pieData.length === 0 ? (

    <p className="empty-text">
      No expense data available.
    </p>

  ) : (

    pieData
      .sort((a, b) => b.value - a.value)
      .slice(0, 6)
      .map((item, index) => (

        <div className="top-category" key={index}>

          <div>

            <h4>{item.name}</h4>

            <span>₹{item.value.toLocaleString()}</span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${Math.min(
                  (item.value / pieData[0].value) * 100,
                  100
                )}%`,
                background:
                  colors[index % colors.length],
              }}
            ></div>

          </div>

        </div>

      ))

  )}

</div>

        </div>

      </div>

    </div>

  );
}

export default Analytics;
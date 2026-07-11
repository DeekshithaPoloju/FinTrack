import { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
  FaWallet,
} from "react-icons/fa";

import "./SummaryCards.css";

function SummaryCards() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const transactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        totalIncome += Number(transaction.amount);
      } else {
        totalExpense += Number(transaction.amount);
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
  }, []);

  const savings = income - expense;
  const balance = income - expense;

  return (
    <div className="summary-grid">

      {/* Income */}
      <div className="card income-card">
        <div className="card-icon">
          <FaArrowUp />
        </div>

        <div>
          <h4>Income</h4>
          <h2>₹{income.toLocaleString()}</h2>
          <p>Total Income</p>
        </div>
      </div>

      {/* Expense */}
      <div className="card expense-card">
        <div className="card-icon">
          <FaArrowDown />
        </div>

        <div>
          <h4>Expense</h4>
          <h2>₹{expense.toLocaleString()}</h2>
          <p>Total Expense</p>
        </div>
      </div>

      {/* Savings */}
      <div className="card savings-card">
        <div className="card-icon">
          <FaPiggyBank />
        </div>

        <div>
          <h4>Savings</h4>
          <h2>₹{savings.toLocaleString()}</h2>
          <p>Income - Expense</p>
        </div>
      </div>

      {/* Balance */}
      <div className="card balance-card">
        <div className="card-icon">
          <FaWallet />
        </div>

        <div>
          <h4>Total Balance</h4>
          <h2>₹{balance.toLocaleString()}</h2>
          <p>Available Balance</p>
        </div>
      </div>

    </div>
  );
}

export default SummaryCards;
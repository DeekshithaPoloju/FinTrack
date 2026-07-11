import {
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
  FaWallet,
} from "react-icons/fa";

import "./SummaryCards.css";

function SummaryCards() {
  return (
    <div className="summary-grid">

      {/* Income */}

      <div className="card income-card">
        <div className="card-icon">
          <FaArrowUp />
        </div>

        <div>
          <h4>Income</h4>
          <h2>₹75,000</h2>
          <p>+12% from last month</p>
        </div>
      </div>

      {/* Expense */}

      <div className="card expense-card">
        <div className="card-icon">
          <FaArrowDown />
        </div>

        <div>
          <h4>Expense</h4>
          <h2>₹22,550</h2>
          <p>-5% from last month</p>
        </div>
      </div>

      {/* Savings */}

      <div className="card savings-card">
        <div className="card-icon">
          <FaPiggyBank />
        </div>

        <div>
          <h4>Savings</h4>
          <h2>₹52,450</h2>
          <p>Excellent 🎉</p>
        </div>
      </div>

      {/* Balance */}

      <div className="card balance-card">
        <div className="card-icon">
          <FaWallet />
        </div>

        <div>
          <h4>Total Balance</h4>
          <h2>₹52,450</h2>
          <p>Updated Today</p>
        </div>
      </div>

    </div>
  );
}

export default SummaryCards;
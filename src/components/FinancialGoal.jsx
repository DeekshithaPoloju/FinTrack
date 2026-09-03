import { useEffect, useState } from "react";
import "./FinancialGoal.css";

function FinancialGoal() {

  const [saved, setSaved] = useState(0);
  const [goal, setGoal] = useState(80000);

  useEffect(() => {

    const settings =
      JSON.parse(localStorage.getItem("settings")) || {};

    setGoal(settings.goal || 80000);

    const transactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    let income = 0;
    let expense = 0;

    transactions.forEach((item) => {

      if (item.type === "Income") {
        income += Number(item.amount);
      } else {
        expense += Number(item.amount);
      }

    });

    setSaved(income - expense);

  }, []);

  const progress = Math.min(
    (saved / goal) * 100,
    100
  );

  return (

    <div className="goal-card">

      <h2>Financial Goal</h2>

      <h4>Monthly Savings Goal</h4>

      <h1>
        ₹{saved.toLocaleString()} / ₹{goal.toLocaleString()}
      </h1>

      <div className="goal-bar">

        <div
          className="goal-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

      <p>{progress.toFixed(0)}% Completed</p>

    </div>

  );
}

export default FinancialGoal;
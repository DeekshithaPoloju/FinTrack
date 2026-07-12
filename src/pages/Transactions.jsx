import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Transactions.css";

const incomeCategories = [
  "Salary",
  "Freelance",
  "Business",
  "Investment",
  "Bonus",
  "Gift",
  "Interest",
  "Rental Income",
  "Other",
];

const expenseCategories = [
  "Food & Dining",
  "Groceries",
  "Shopping",
  "Travel",
  "Fuel",
  "Rent",
  "Electricity Bill",
  "Water Bill",
  "Internet",
  "Mobile Recharge",
  "Healthcare",
  "Medicine",
  "Education",
  "Entertainment",
  "Subscription",
  "Insurance",
  "EMI",
  "Taxes",
  "Personal Care",
  "Home Maintenance",
  "Charity",
  "Other",
];

function Transactions() {
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState(incomeCategories[0]);
  const [customCategory, setCustomCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("UPI");

  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !date) {
      alert("Please fill all required fields.");
      return;
    }

    if (category === "Other" && customCategory.trim() === "") {
      alert("Please enter a custom category.");
      return;
    }

    const transaction = {
      id: Date.now(),
      type,
      category:
        category === "Other"
          ? customCategory
          : category,
      amount: Number(amount),
      date,
      payment,
    };

    const updatedTransactions = [...transactions, transaction];

    setTransactions(updatedTransactions);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updatedTransactions)
    );

    setType("Income");
    setCategory(incomeCategories[0]);
    setCustomCategory("");
    setAmount("");
    setDate("");
    setPayment("UPI");
  };

  const deleteTransaction = (id) => {
    const updated = transactions.filter(
      (item) => item.id !== id
    );

    setTransactions(updated);

    localStorage.setItem(
      "transactions",
      JSON.stringify(updated)
    );
  };

  const filteredTransactions = transactions.filter((item) =>
    item.category
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="content">

          <div className="transactions-page">

            <h1>Transactions</h1>

            <p className="subtitle">
              Manage your income and expenses efficiently.
            </p>

            <div className="transactions-layout">

              {/* LEFT CARD */}

              <div className="form-card">

                <h2>Add Transaction</h2>

                <form onSubmit={handleSubmit}>

                  <label>Type</label>

                  <select
                    value={type}
                    onChange={(e) => {
                      const value = e.target.value;

                      setType(value);

                      if (value === "Income") {
                        setCategory(incomeCategories[0]);
                      } else {
                        setCategory(expenseCategories[0]);
                      }

                      setCustomCategory("");
                    }}
                  >
                    <option>Income</option>
                    <option>Expense</option>
                  </select>

                  <label>Category</label>

                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);

                      if (e.target.value !== "Other") {
                        setCustomCategory("");
                      }
                    }}
                  >
                    {(type === "Income"
                      ? incomeCategories
                      : expenseCategories
                    ).map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                  {category === "Other" && (
                    <>
                      <label>Custom Category</label>

                      <input
                        type="text"
                        placeholder="Enter category"
                        value={customCategory}
                        onChange={(e) =>
                          setCustomCategory(
                            e.target.value
                          )
                        }
                      />
                    </>
                  )}

                  <label>Amount</label>

                  <input
                    type="number"
                    placeholder="₹ Enter Amount"
                    value={amount}
                    onChange={(e) =>
                      setAmount(e.target.value)
                    }
                  />

                  <label>Date</label>

                  <input
                    type="date"
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                  />

                  <label>Payment Method</label>

                  <select
                    value={payment}
                    onChange={(e) =>
                      setPayment(e.target.value)
                    }
                  >
                    <option>UPI</option>
                    <option>Cash</option>
                    <option>Debit Card</option>
                    <option>Credit Card</option>
                    <option>Bank Transfer</option>
                    <option>Net Banking</option>
                  </select>

                  <button
                    type="submit"
                    className="save-btn"
                  >
                    Add Transaction
                  </button>

                </form>

              </div>
                            {/* RIGHT CARD */}

              <div className="table-card">

                <h2>Recent Transactions</h2>

                <input
                  type="text"
                  className="search-box"
                  placeholder="Search category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <table>

                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>Payment</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    {filteredTransactions.length === 0 ? (

                      <tr>
                        <td colSpan="6" style={{ textAlign: "center" }}>
                          No Transactions Found
                        </td>
                      </tr>

                    ) : (

                      filteredTransactions.map((item) => (

                        <tr key={item.id}>

                          <td>{item.date}</td>

                          <td
                            style={{
                              color:
                                item.type === "Income"
                                  ? "#22c55e"
                                  : "#ef4444",
                              fontWeight: "600",
                            }}
                          >
                            {item.type}
                          </td>

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
                            {item.type === "Income" ? "+" : "-"} ₹
                            {item.amount.toLocaleString()}
                          </td>

                          <td>{item.payment}</td>

                          <td>

                            <button
                              className="delete-btn"
                              onClick={() =>
                                deleteTransaction(item.id)
                              }
                            >
                              Delete
                            </button>

                          </td>

                        </tr>

                      ))

                    )}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Transactions;
function AddTransaction() {
  return (
    <div>
      <h3>Add New Transaction</h3>

      <form>
        <input type="text" placeholder="Enter text" />

        <input type="number" placeholder="Enter amount" />

        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
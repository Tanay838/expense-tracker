import { useEffect, useState } from "react";
import "./TransactionForm.css";
import toast from "react-hot-toast";

function TransactionForm({
  onAddTransaction,
  editingTransaction,
  onUpdateTransaction,
}) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "Income",
    category: "Salary",
    date: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingTransaction) {
      setFormData(editingTransaction);
    }
  }, [editingTransaction]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData({
      title: "",
      amount: "",
      type: "Income",
      category: "Salary",
      date: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingTransaction) {
  onUpdateTransaction(formData);
  toast.success("Transaction Updated!");
} else {
  onAddTransaction(formData);
  toast.success("Transaction Added!");
}

    resetForm();
  }

  return (
    <section className="transaction-form">
      <h2>
        {editingTransaction
          ? "Edit Transaction"
          : "Add New Transaction"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label>Amount</label>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Salary</option>
              <option>Food</option>
              <option>Shopping</option>
              <option>Travel</option>
              <option>Health</option>
              <option>Bills</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          {editingTransaction
            ? "Update Transaction"
            : "Add Transaction"}
        </button>
      </form>
    </section>
  );
}

export default TransactionForm;
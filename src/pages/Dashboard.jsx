import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import FilterBar from "../components/FilterBar";
import PieChart from "../components/Charts/PieChart";
import "./Dashboard.css";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import AnalyticsSection from "../components/AnalyticsSection";
import BarChart from "../components/Charts/BarChart";
import ExportExcel from "../components/ExportExcel";

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");

  // ⭐ New State
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

  // Save Transactions
useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}, [transactions]);

// Save Theme
useEffect(() => {
  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  );

  document.body.className = darkMode ? "dark" : "";
}, [darkMode]);

  // Add Transaction
  function addTransaction(newTransaction) {
    setTransactions((prev) => [
      {
        id: Date.now(),
        ...newTransaction,
      },
      ...prev,
    ]);
  }

  // Delete Transaction
  function deleteTransaction(id) {
  setTransactions((prev) =>
    prev.filter((item) => item.id !== id)
  );

  toast.success("Transaction Deleted!");
}

  // ⭐ Start Editing
  function startEdit(transaction) {
    setEditingTransaction(transaction);
  }

  // ⭐ Update Transaction
  function updateTransaction(updatedTransaction) {
    setTransactions((prev) =>
      prev.map((item) =>
        item.id === updatedTransaction.id
          ? updatedTransaction
          : item
      )
    );

    setEditingTransaction(null);
  }

  // Summary
  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const balance = income - expense;

  // Search + Filter + Sort
  const filteredTransactions = [...transactions]
    .filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || item.type === filter;

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.date) - new Date(a.date);
      }

      return new Date(a.date) - new Date(b.date);
    });

  return (
    <>
      <Navbar darkMode={darkMode}
  setDarkMode={setDarkMode}/>

      <main className="container dashboard">

        <section className="cards-grid">
          <SummaryCard
            title="Total Balance"
            amount={balance}
            color="blue"
          />

          <SummaryCard
            title="Total Income"
            amount={income}
            color="green"
          />

          <SummaryCard
            title="Total Expense"
            amount={expense}
            color="red"
          />
        </section>

        <TransactionForm
          onAddTransaction={addTransaction}
          editingTransaction={editingTransaction}
          onUpdateTransaction={updateTransaction}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />

        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
  <ExportExcel transactions={transactions} />
</div>

        <AnalyticsSection>

  <TransactionList
    transactions={filteredTransactions}
    onDelete={deleteTransaction}
    onEdit={startEdit}
  />

  <PieChart
    income={income}
    expense={expense}
  />

</AnalyticsSection>

<BarChart
  transactions={transactions}
/>


        <Footer />

      </main>
    </>
  );
}

export default Dashboard;